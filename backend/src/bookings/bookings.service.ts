import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';

interface Booking {
  id: number;
  name: string;
  email: string;
  date: string;
  packageId?: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

@Injectable()
export class BookingsService {
  private bookings: Booking[] = [];
  private bookingCounter = 1;

  create(dto: CreateBookingDto): Booking {
    const booking: Booking = {
      id: this.bookingCounter++,
      name: dto.name,
      email: dto.email,
      date: dto.date,
      packageId: dto.packageId,
      status: 'pending',
      createdAt: new Date().toISOString(),
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

  updateStatus(id: number, status: 'confirmed' | 'cancelled') {
    const booking = this.findById(id);
    if (booking) {
      booking.status = status;
    }
    return booking;
  }
}
