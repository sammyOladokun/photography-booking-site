import { Body, Controller, Get, Post, Param, Patch, Query } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly svc: BookingsService) {}

  @Get()
  list() {
    return { bookings: this.svc.list() };
  }

  @Get('availability')
  availability(@Query('date') date: string, @Query('packageId') packageId?: string) {
    return {
      availability: this.svc.getAvailability(date, packageId ? parseInt(packageId) : undefined),
    };
  }

  @Post()
  create(@Body() dto: CreateBookingDto) {
    try {
      const booking = this.svc.create(dto);
      return {
        message: 'booking request received',
        booking,
        paymentSession: {
          reference: booking.paymentReference,
          status: booking.paymentStatus,
        },
      };
    } catch (error) {
      if (error instanceof Error){
        return {error: error.message};
      }
      return { error: 'An unexpected error occurred' };
    }
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    const booking = this.svc.findById(parseInt(id));
    return booking || { error: 'not found' };
  }

  @Post(':id/payment/validate')
  validatePayment(@Param('id') id: string, @Body() body: { reference: string }) {
    const booking = this.svc.validatePayment(parseInt(id), body.reference);
    if (!booking) {
      return { error: 'not found' };
    }

    if (booking.paymentStatus === 'failed') {
      return { message: 'payment validation failed', booking };
    }

    return { message: 'payment validated and booking confirmed', booking };
  }

  @Patch(':id/confirm')
  confirm(@Param('id') id: string) {
    const booking = this.svc.updateStatus(parseInt(id), 'confirmed');
    return { message: 'booking confirmed', booking };
  }
}
