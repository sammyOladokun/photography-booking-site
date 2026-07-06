import { Body, Controller, Get, Post, Param, Patch } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly svc: BookingsService) {}

  @Get()
  list() {
    return { bookings: this.svc.list() };
  }

  @Post()
  create(@Body() dto: CreateBookingDto) {
    const booking = this.svc.create(dto);
    return { message: 'booking request received', booking };
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    const booking = this.svc.findById(parseInt(id));
    return booking || { error: 'not found' };
  }

  @Patch(':id/confirm')
  confirm(@Param('id') id: string) {
    const booking = this.svc.updateStatus(parseInt(id), 'confirmed');
    return { message: 'booking confirmed', booking };
  }
}
