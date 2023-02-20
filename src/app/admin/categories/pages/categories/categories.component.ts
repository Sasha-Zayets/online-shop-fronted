import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [{ id: 0, name: 'test' }];

  constructor() { }

  ngOnInit(): void {
  }

}
