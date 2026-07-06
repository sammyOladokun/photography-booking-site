import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';

interface Booking {
  id: number;
  name: string;
  email: string;
  startAt: string;
  endAt: string;
  packageId?: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'failed';
  paymentReference: string;
  createdAt: string;
  notes?: string;
}

const PACKAGE_DURATIONS: Record<number, number> = {
  1: 2,
  2: 4,
  3: 8,
}

@Injectable()
export class BookingsService {
  private bookings: Booking[] = [];
  private bookingCounter = 1;

  private parseDateTime(value: string) {
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
      throw new Error('Invalid booking date');
    }
    return parsed;
  }

  private packageDuration(packageId?: number) {
    return PACKAGE_DURATIONS[packageId || 1] || 2;
  }

  private sameCalendarDay(left: Date, right: Date) {
    return (
      left.getUTCFullYear() === right.getUTCFullYear() &&
      left.getUTCMonth() === right.getUTCMonth() &&
      left.getUTCDate() === right.getUTCDate()
    );
  }

  private overlaps(startA: Date, endA: Date, startB: Date, endB: Date) {
    return startA < endB && endA > startB;
  }

  private bookingWindow(startAt: Date, packageId?: number) {
    const durationHours = this.packageDuration(packageId);
    const endAt = new Date(startAt);
    endAt.setHours(endAt.getHours() + durationHours);
    return { startAt, endAt };
  }

  private dateOnly(value: Date) {
    return value.toISOString().slice(0, 10);
  }

  private getBusinessSlots(date: string, packageId?: number) {
    const dateValue = new Date(`${date}T00:00:00Z`);
    const durationHours = this.packageDuration(packageId);
    const openings: { startAt: string; endAt: string; label: string; available: boolean }[] = [];
    const dayStartHour = 9;
    const dayEndHour = 18;

    for (let hour = dayStartHour; hour + durationHours <= dayEndHour; hour += 1) {
      const startAt = new Date(dateValue);
      startAt.setUTCHours(hour, 0, 0, 0);
      const endAt = new Date(startAt);
      endAt.setUTCHours(hour + durationHours, 0, 0, 0);

      const unavailable = this.bookings.some((booking) => {
        if (booking.status === 'cancelled') return false;
        const existingStart = new Date(booking.startAt);
        const existingEnd = new Date(booking.endAt);
        return this.sameCalendarDay(existingStart, startAt) && this.overlaps(startAt, endAt, existingStart, existingEnd);
      });

      openings.push({
        startAt: startAt.toISOString(),
        endAt: endAt.toISOString(),
        available: !unavailable,
        label: `${String(hour).padStart(2, '0')}:00 - ${String(hour + durationHours).padStart(2, '0')}:00`,
      });
    }

    return openings;
  }

  getAvailability(date: string, packageId?: number) {
    const slots = this.getBusinessSlots(date, packageId);
    return {
      date,
      packageId: packageId || 1,
      slots,
    };
  }

  create(dto: CreateBookingDto): Booking {
    const startAt = this.parseDateTime(dto.startAt);
    const { endAt } = this.bookingWindow(startAt, dto.packageId);
    const hasConflict = this.bookings.some((booking) => {
      if (booking.status === 'cancelled') return false;
      const existingStart = new Date(booking.startAt);
      const existingEnd = new Date(booking.endAt);
      return this.overlaps(startAt, endAt, existingStart, existingEnd);
    });

    if (hasConflict) {
      throw new Error('Selected time is unavailable');
    }

    const booking: Booking = {
      id: this.bookingCounter++,
      name: dto.name,
      email: dto.email,
      startAt: startAt.toISOString(),
      endAt: endAt.toISOString(),
      packageId: dto.packageId,
      status: 'pending',
      paymentStatus: 'pending',
      paymentReference: `pay_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      createdAt: new Date().toISOString(),
      notes: dto.notes,
    };
    this.bookings.push(booking);
    return booking;
  }

  list() {
    return this.bookings;
  }

  findById(id: number) {
    return this.bookings.find(b => b.id === id);
  }

  validatePayment(id: number, reference: string) {
    const booking = this.findById(id);
    if (!booking) return null;

    if (booking.paymentReference !== reference) {
      booking.paymentStatus = 'failed';
      return booking;
    }

    booking.paymentStatus = 'paid';
    booking.status = 'confirmed';
    return booking;
  }

  updateStatus(id: number, status: 'confirmed' | 'cancelled') {
    const booking = this.findById(id);
    if (booking) {
      booking.status = status;
    }
    return booking;
  }
}
