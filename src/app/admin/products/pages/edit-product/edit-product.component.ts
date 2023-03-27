import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../../core/services/products.service';
import { Product } from '../../../../core/models/product';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.sass']
})
export class EditProductComponent implements OnInit {
  product: Product | null = null;
  idProduct = '';
  constructor(
    private readonly routerService: ActivatedRoute,
    private readonly productService: ProductsService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.routerService.params.subscribe((params) => {
      const { productId = '' } = params;

      this.idProduct = productId;
      this.getProductData(productId);
    });
  }

  getProductData(idProduct: string): void {
    this.productService.getFullProductById(idProduct).subscribe((product) => {
      this.product = product;
    });
  }

  updateProduct(product: FormData): void {
    this.productService.updateProduct(this.idProduct, product).subscribe(() => {
      this.snackBar.open('Product updated successfully', '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });

      this.getProductData(this.idProduct);
    });
  }

  updateImageForProduct(file: File): void {
    const formData = new FormData();
    formData.set('image', file);
    this.productService.updateImageForProduct(this.idProduct, formData).subscribe(() => {
      this.getProductData(this.idProduct);
    });
  }

  deleteImageForProduct(): void {
    this.productService.deleteImageForProduct(this.idProduct).subscribe(() => {
      this.getProductData(this.idProduct);
    });
  }
}
