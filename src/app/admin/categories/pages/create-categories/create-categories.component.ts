import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.sass']
})
export class CreateCategoriesComponent implements OnInit {

  categoryForm = new FormGroup({
    name: new FormControl('', Validators.compose([Validators.required])),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitCategoryForm(values: any) {
    console.log("Form submit", values);
  }

}
