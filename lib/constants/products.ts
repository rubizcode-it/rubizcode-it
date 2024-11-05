export interface Product {
  name: string;
  description: string;
  color: string;
  image: string;
}

export const products = [
    {
      name: 'Daily Topper',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      color: 'bg-red-500',
      image: '/images/products/daily-topper.jpg'
    },
    {
      name: 'Testiphy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      color: 'bg-purple-500',
      image: '/images/products/testiphy.jpg'
    },
    {
      name: 'Taalaash',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      color: 'bg-green-500',
      image: '/images/products/taalaash.jpg'
    },
    {
      name: 'TopperOn',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      color: 'bg-blue-500',
      image: '/images/products/topperon.jpg'
    }
  ] as const

// If you haven't already defined it, add this to your types.ts file:
export interface Product {
  name: string;
  description: string;
  image: string;
  color: string;
} 