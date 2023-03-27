import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { DeleteRespose } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private readonly apiService: ApiService) { }

  getAllProducts(): Observable<Product[]> {
    return this.apiService.get('/products');
  }

  createProduct(product: FormData): Observable<Product> {
    return this.apiService.post(`/products`, product);
  }

  updateProduct(idProduct: string, product: FormData): Observable<Product> {
    return this.apiService.put(`/products/${idProduct}`, product);
  }

  deleteProduct(idProduct: number): Observable<DeleteRespose> {
    return this.apiService.delete(`/products/${idProduct}`);
  }

  getFullProductById(idProduct: string): Observable<Product> {
    return this.apiService.get(`/products/${idProduct}`);
  }

  updateImageForProduct(idProduct: string, product: FormData): Observable<Product> {
    return this.apiService.put(`/products/images/${idProduct}`, product);
  }

  deleteImageForProduct(idProduct: string): Observable<Product> {
    return this.apiService.delete(`/products/images/${idProduct}`);
  }
}
