export interface Property {
  id: string;
  title: string;
  type: 'flat' | 'plot' | 'commercial';
  location: string;
  price: number;
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  images: string[];
  description: string;
  features: string[];
  mapUrl: string;
  featured: boolean;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  budget: string;
  location: string;
  propertyType: string;
  message: string;
  propertyId?: string;
  timestamp: Date;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
  image: string;
  date: string;
}

export interface FilterOptions {
  location: string;
  type: string;
  minPrice: number;
  maxPrice: number;
}
