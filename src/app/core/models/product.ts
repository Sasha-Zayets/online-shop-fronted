import { ID, CATEGORY_ID } from '../types/types';

export interface Product {
  id: ID;
  name: string;
  description: string;
  image: string | null;
  price: number;
  available: boolean;
  categories: CATEGORY_ID[];
}
