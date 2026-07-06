import { Controller, Get, Param } from '@nestjs/common';
import { PackagesService } from './packages.service';

@Controller('packages')
export class PackagesController {
  constructor(private readonly svc: PackagesService) {}

  @Get()
  list() {
    return { packages: this.svc.list() };
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    const pkg = this.svc.findById(parseInt(id));
    return pkg || { error: 'not found' };
  }

  @Get('category/:category')
  findByCategory(@Param('category') category: string) {
    return { packages: this.svc.findByCategory(category) };
  }
}
