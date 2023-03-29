import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../../core/services/products.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Category} from '../../../../core/models/category';
import {CategoriesService} from '../../../../core/services/categories.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.sass']
})
export class CreateProductComponent implements OnInit {
  categories: Category[] = [];
  constructor(
    private readonly productsService: ProductsService,
    private readonly categoriesService: CategoriesService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  createProduct(product: FormData): void {
    this.productsService.createProduct(product).subscribe(() => {
      this.router.navigate(['/', 'admin', 'products']);
      this.snackBar.open('Product created successfully', '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    });
  }
}
