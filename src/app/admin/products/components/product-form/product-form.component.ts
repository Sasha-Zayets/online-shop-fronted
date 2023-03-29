import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../../core/models/product';
import {Category} from '../../../../core/models/category';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.sass']
})
export class ProductFormComponent implements OnInit, OnChanges {
  @Input() initialValues: Product | null = null;
  @Input() categories: Category[] = [];
  @Output() onSubmitForm: EventEmitter<FormData> = new EventEmitter<FormData>();
  @Output() onRemoveFile: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onUpdateFile: EventEmitter<File> = new EventEmitter<File>();

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
    categories: new FormControl(null, Validators.compose([
      Validators.required,
    ])),
    price: new FormControl(0, Validators.compose([
      Validators.required,
    ])),
    available: new FormControl(false),
    image: new FormControl(null),
  }));

  ngOnInit(): void {
    if (this.initialValues) {
      this.setInitialValuesForForm(this.initialValues);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.initialValues) {
      this.setInitialValuesForForm(changes.initialValues.currentValue);
    }
  }

  setInitialValuesForForm(values: Product): void {
    this.isEditForm = true;
    this.productForm.patchValue(values);
  }

  loadImage(file: File | null): void {
    if (!file && this.isEditForm) {
      this.onRemoveFile.emit(true);
    } else if (file && this.isEditForm) {
      this.onUpdateFile.emit(file);
    }

    this.productForm.patchValue({
      image: file,
    });
  }

  onSubmitProductForm(values: any): void {
    const formData = new FormData();
    Object.keys(values).forEach(key => {
      if (Array.isArray(values[key])) {
        values[key].forEach((el: string) => {
          formData.append(`${key}[]`, el);
        });
      } else {
        formData.append(key, values[key]);
      }
    });

    this.onSubmitForm.emit(formData);
  }
}
