import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/core/models/category';
import { CreateCategory } from '../../categories.types';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.sass']
})
export class CategoryFormComponent implements OnInit, OnChanges {
  @Input() initialValues: Category | null = null;
  @Output() onSendForm: EventEmitter<CreateCategory> = new EventEmitter();

  isEditForm = false;
  categoryForm = new FormGroup({
    name: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(150),
    ])),
  });

  constructor() { }

  ngOnInit(): void {
    if (this.initialValues) {
      this.categoryForm.patchValue({ name: this.initialValues.name });
      this.isEditForm = true;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.initialValues) {
      const name = changes.initialValues?.currentValue?.name || '';
      this.categoryForm.patchValue({ name });
      this.isEditForm = true;
    }
  }

  onSubmitCategoryForm(values: CreateCategory): void {
    this.onSendForm.emit(values);
  }

}
