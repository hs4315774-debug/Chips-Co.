import { Flavor, Testimonial, BrandStat } from './types';

export const FLAVORS: Flavor[] = [
  {
    id: '1',
    name: 'Classic Salted',
    description: 'The timeless crunch of golden potatoes with just the right amount of sea salt.',
    image: 'https://picsum.photos/seed/chips-classic/600/600',
    category: 'Classic',
    color: 'bg-brand-yellow'
  },
  {
    id: '2',
    name: 'Fiery Chili',
    description: 'A bold explosion of heat and spice that keeps you coming back for more.',
    image: 'https://picsum.photos/seed/chips-spicy/600/600',
    category: 'Spicy',
    color: 'bg-brand-red'
  },
  {
    id: '3',
    name: 'Truffle & Parmesan',
    description: 'An elegant blend of earthy truffle and rich parmesan for a gourmet snack experience.',
    image: 'https://picsum.photos/seed/chips-truffle/600/600',
    category: 'Limited Edition',
    color: 'bg-purple-600'
  },
  {
    id: '4',
    name: 'Sour Cream & Onion',
    description: 'Cool creaminess meets zesty onion in every perfectly seasoned bite.',
    image: 'https://picsum.photos/seed/chips-onion/600/600',
    category: 'Classic',
    color: 'bg-green-500'
  },
  {
    id: '5',
    name: 'Smoky BBQ',
    description: 'Sweet, tangy, and smoky flavors that capture the essence of a summer grill.',
    image: 'https://picsum.photos/seed/chips-bbq/600/600',
    category: 'Family Packs',
    color: 'bg-orange-700'
  },
  {
    id: '6',
    name: 'Ghost Pepper Blast',
    description: 'Only for the bravest snackers. Extreme heat that lingers.',
    image: 'https://picsum.photos/seed/chips-ghost/600/600',
    category: 'Spicy',
    color: 'bg-red-900'
  }
];

export const STATS: BrandStat[] = [
  { label: 'Years of Joy', value: 50, suffix: '+' },
  { label: 'Countries Served', value: 120, suffix: '' },
  { label: 'Unique Flavors', value: 200, suffix: '+' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    avatar: 'https://i.pravatar.cc/150?u=alex',
    rating: 5,
    text: "CrunchyJoy is my go-to snack for movie nights. The Classic Salted is unbeatable!"
  },
  {
    id: '2',
    name: 'Sarah Miller',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    rating: 5,
    text: "The Fiery Chili flavor actually has a kick! Most brands play it safe, but this is legit."
  },
  {
    id: '3',
    name: 'David Chen',
    avatar: 'https://i.pravatar.cc/150?u=david',
    rating: 4,
    text: "Love the Limited Edition flavors. The Truffle & Parmesan is a game changer."
  }
];

export const GALLERY_IMAGES = [
  'https://picsum.photos/seed/snack1/800/600',
  'https://picsum.photos/seed/snack2/600/800',
  'https://picsum.photos/seed/snack3/800/800',
  'https://picsum.photos/seed/snack4/600/600',
  'https://picsum.photos/seed/snack5/800/1000',
  'https://picsum.photos/seed/snack6/1000/800',
];
