import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from 'src/app/core/models/category';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  loading = true;

  constructor(private categoriesService: CategoriesService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.categoriesService.getAllCategories().subscribe((listCategories) => {
      this.categories = listCategories;
      this.loading = false;
    });
  }

  deleteCategory(id: number): void {
    this.categoriesService.deleteCategory(id).subscribe(() => {
      this.getAllCategories();
      this.snackBar.open('Category deleted successfully', '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    });
  }
}
