import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateCategory } from '../../categories.types';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.sass']
})
export class CategoryFormComponent implements OnInit {
  @Output() onSendForm: EventEmitter<CreateCategory> = new EventEmitter();

  categoryForm = new FormGroup({
    name: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(150),
    ])),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitCategoryForm(values: CreateCategory): void {
    this.onSendForm.emit(values);
  }

}
