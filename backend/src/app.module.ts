import { Module } from '@nestjs/common';
import { BookingsModule } from './bookings/bookings.module';
import { PackagesModule } from './packages/packages.module';
import { PhotographerModule } from './photographer/photographer.module';

@Module({
  imports: [BookingsModule, PackagesModule, PhotographerModule],
})
export class AppModule {}
