import { Controller, Get, Param } from '@nestjs/common';
import { PhotographerService } from './photographer.service';

@Controller('photographer')
export class PhotographerController {
  constructor(private readonly svc: PhotographerService) {}

  @Get()
  getPhotographer() {
    return this.svc.getPhotographer();
  }

  @Get('testimonials')
  getTestimonials() {
    return { testimonials: this.svc.getTestimonials() };
  }

  @Get('collections')
  getCollections() {
    return { collections: this.svc.getCollections() };
  }

  @Get('collections/:id')
  getCollectionById(@Param('id') id: string) {
    const collection = this.svc.getCollectionById(parseInt(id));
    return collection || { error: 'not found' };
  }
}
