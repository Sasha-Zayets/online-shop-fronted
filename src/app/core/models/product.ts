import { ID } from '../types/types';
import { Category } from './category';

export interface Product {
  id: ID;
  name: string;
  description: string;
  image: string | null;
  price: number;
  available: boolean;
  categories: Category[];
}
