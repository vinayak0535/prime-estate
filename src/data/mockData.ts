import { Property, Testimonial } from '../types';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Luxury 3BHK Apartment',
    type: 'flat',
    location: 'Taloja Phase 1',
    price: 8500000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1450,
    images: [
      'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Spacious apartment with modern amenities, perfect for families',
    features: ['Parking', 'Gym', 'Swimming Pool', '24/7 Security', 'Power Backup'],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1234567890',
    featured: true
  },
  {
    id: '2',
    title: 'Premium Commercial Space',
    type: 'commercial',
    location: 'Taloja Phase 1',
    price: 15000000,
    area: 2500,
    images: [
      'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Prime commercial property in the heart of business district',
    features: ['Central AC', 'Elevator', 'Parking', 'High-speed Internet', 'Conference Rooms'],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1234567890',
    featured: true
  },
  {
    id: '3',
    title: 'Residential Plot - East Facing',
    type: 'plot',
    location: 'Kharghar',
    price: 3500000,
    area: 2400,
    images: [
      'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Prime residential plot with clear title and good connectivity',
    features: ['Clear Title', 'Gated Community', 'Water Connection', 'Electricity', 'Parks Nearby'],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1234567890',
    featured: false
  },
  {
    id: '4',
    title: 'Modern 2BHK Flat',
    type: 'flat',
    location: 'Ghot',
    price: 5500000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Contemporary design with river view and excellent amenities',
    features: ['Modular Kitchen', 'Balcony', 'Parking', 'Lift', 'Security'],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1234567890',
    featured: false
  }
,
    {
    id: '',
    title: 'Modern 2BHK Flat',
    type: 'flat',
    location: 'Belapur',
    price: 5500000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Contemporary design with river view and excellent amenities',
    features: ['Modular Kitchen', 'Balcony', 'Parking', 'Lift', 'Security'],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1234567890',
    featured: false
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    rating: 5,
    review: 'Excellent service! Found my dream home within a week. Professional and responsive team.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    date: '2024-09-15'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    rating: 5,
    review: 'Very helpful in finding the perfect commercial space for my business. Highly recommended!',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    date: '2024-08-22'
  },
  {
    id: '3',
    name: 'Amit Patel',
    rating: 5,
    review: 'Professional approach and great market knowledge. Made the buying process smooth and hassle-free.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    date: '2024-10-01'
  }
];
