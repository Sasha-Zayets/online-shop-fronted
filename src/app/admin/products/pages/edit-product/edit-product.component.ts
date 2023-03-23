import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../../../../core/services/products.service';
import {Product} from '../../../../core/models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.sass']
})
export class EditProductComponent implements OnInit {
  product: Product | null = null;
  constructor(private readonly routerService: ActivatedRoute, private readonly productService: ProductsService) { }

  ngOnInit(): void {
    this.routerService.params.subscribe((params) => {
      const { productId = '' } = params;
      this.getProductData(productId);
    });
  }

  getProductData(idProduct: string): void {
    this.productService.getFullProductById(idProduct).subscribe((product) => {
      this.product = product;
    });
  }

}
