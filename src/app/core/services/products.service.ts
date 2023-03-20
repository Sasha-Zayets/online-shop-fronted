import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private readonly apiService: ApiService) { }

  getAllProducts(): Observable<Product[]> {
    return this.apiService.get<Product[]>('/products');
  }

  deleteProduct(idProduct: number): Observable<any> {
    return this.apiService.delete(`/products/${idProduct}`);
  }
}
