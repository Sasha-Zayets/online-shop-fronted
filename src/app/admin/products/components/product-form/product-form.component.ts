import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.sass']
})
export class ProductFormComponent implements OnInit {

  isEditForm = false;
  productForm = new FormGroup(({
    name: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(150),
    ])),
    description: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(500),
    ])),
    price: new FormControl(0, Validators.compose([
      Validators.required,
    ])),
    available: new FormControl(false),
  }));

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitProductForm(values: any): void {
    console.log(values);
  }
}
