import { Injectable } from '@nestjs/common';

export interface Package {
  id: number;
  name: string;
  category: 'fashion' | 'commercial' | 'portraits';
  price: number;
  duration: number; // hours
  deliverables: string[];
  description: string;
}

@Injectable()
export class PackagesService {
  private packages: Package[] = [
    {
      id: 1,
      name: 'Fashion Session',
      category: 'fashion',
      price: 1200,
      duration: 4,
      deliverables: ['50+ edited images', 'Digital files', 'Social media ready'],
      description: 'Professional fashion and lifestyle photography session',
    },
    {
      id: 2,
      name: 'Commercial Shoot',
      category: 'commercial',
      price: 2500,
      duration: 8,
      deliverables: ['100+ images', 'Color grading', 'Usage rights', 'Prints included'],
      description: 'Full-day commercial photography with creative consultation',
    },
    {
      id: 3,
      name: 'Portrait Session',
      category: 'portraits',
      price: 600,
      duration: 2,
      deliverables: ['20+ edited images', 'Digital files', 'Print options'],
      description: 'Intimate portrait photography session',
    },
  ];

  list() {
    return this.packages;
  }

  findById(id: number) {
    return this.packages.find(p => p.id === id);
  }

  findByCategory(category: string) {
    return this.packages.filter(p => p.category === category);
  }
}
