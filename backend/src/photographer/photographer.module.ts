import { Module } from '@nestjs/common';
import { PhotographerController } from './photographer.controller';
import { PhotographerService } from './photographer.service';

@Module({
  controllers: [PhotographerController],
  providers: [PhotographerService],
  exports: [PhotographerService],
})
export class PhotographerModule {}
