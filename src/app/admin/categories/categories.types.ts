import { Category } from 'src/app/core/models/category';

export type CreateCategory = Omit<Category, 'id'>;
