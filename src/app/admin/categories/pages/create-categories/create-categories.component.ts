import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { CreateCategory } from '../../categories.types';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.sass']
})
export class CreateCategoriesComponent implements OnInit {

  constructor(private categoriesService: CategoriesService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  createNewCategory(category: CreateCategory): void {
    this.categoriesService.createCategory(category.name).subscribe(() => {
      this.router.navigate(['/', 'admin', 'categories']);
      this.snackBar.open('Category created successfully', '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    });
  }
}
