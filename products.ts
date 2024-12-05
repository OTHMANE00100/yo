import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Traditional Embroidered Kaftan',
    description: 'Elegant hand-embroidered kaftan with intricate patterns and premium fabric.',
    price: 299.99,
    imageUrl: 'https://images.unsplash.com/photo-1609097828576-3b620e86039e?auto=format&fit=crop&q=80&w=800',
    category: 'Women'
  },
  {
    id: '2',
    name: 'Ceremonial Djellaba',
    description: 'Luxurious ceremonial djellaba with detailed handwork and gold threading.',
    price: 399.99,
    imageUrl: 'https://images.unsplash.com/photo-1600101592343-c1f6d954392a?auto=format&fit=crop&q=80&w=800',
    category: 'Men'
  },
  {
    id: '3',
    name: 'Festival Takchita',
    description: 'Stunning two-piece takchita perfect for special occasions.',
    price: 449.99,
    imageUrl: 'https://images.unsplash.com/photo-1589451359791-f9c33af92239?auto=format&fit=crop&q=80&w=800',
    category: 'Women'
  }
];