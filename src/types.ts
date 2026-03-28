export interface Flavor {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'Classic' | 'Spicy' | 'Limited Edition' | 'Family Packs';
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface BrandStat {
  label: string;
  value: number;
  suffix: string;
}
