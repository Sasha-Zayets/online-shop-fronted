import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/core/models/category';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { CreateCategory } from '../../categories.types';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
})
export class EditCategoryComponent implements OnInit {
  categoryId = '';
  currentCategory: Category | null = null;

  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    const categoryId = this.activeRouter.snapshot.paramMap.get('categoryId');
    if (categoryId) {
      this.categoryId = categoryId;
      this.categoriesService.getFullCategory(categoryId).subscribe((category) => {
        this.currentCategory = category;
      });
    }
  }

  updateCategory(category: CreateCategory): void {
    this.categoriesService.updateCategory(this.categoryId, category.name).subscribe(() => {
      this.router.navigate(['/', 'admin', 'categories']);
      this.snackBar.open('Category updated successfully', '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    });
  }
}
