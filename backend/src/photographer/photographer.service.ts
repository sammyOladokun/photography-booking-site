import { Injectable } from '@nestjs/common';

export interface Photographer {
  id: number;
  name: string;
  bio: string;
  location: string;
  imageUrl?: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role?: string;
}

export interface Collection {
  id: number;
  name: string;
  category: 'fashion' | 'commercial' | 'portraits';
  description: string;
  imageCount: number;
}

@Injectable()
export class PhotographerService {
  private photographer: Photographer = {
    id: 1,
    name: 'LIVIA BLAKE',
    bio: 'A fashion & lifestyle photographer based in Amsterdam. I photograph and create visuals with a customizable curated style.',
    location: 'Amsterdam',
  };

  private testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "I'd like a full session to complete Instagram photos and never interrupting the moment. best photographer best friend.",
      author: 'CHLOE SMITH',
    },
  ];

  private collections: Collection[] = [
    {
      id: 1,
      name: 'Fashion',
      category: 'fashion',
      description: 'Timeless fashion and lifestyle photography',
      imageCount: 24,
    },
    {
      id: 2,
      name: 'Commercial',
      category: 'commercial',
      description: 'Brand and commercial content creation',
      imageCount: 18,
    },
    {
      id: 3,
      name: 'Portraits',
      category: 'portraits',
      description: 'Intimate and expressive portrait sessions',
      imageCount: 32,
    },
  ];

  getPhotographer() {
    return this.photographer;
  }

  getTestimonials() {
    return this.testimonials;
  }

  getCollections() {
    return this.collections;
  }

  getCollectionById(id: number) {
    return this.collections.find(c => c.id === id);
  }
}
