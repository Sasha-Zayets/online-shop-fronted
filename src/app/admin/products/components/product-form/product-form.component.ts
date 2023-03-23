import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../../core/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.sass']
})
export class ProductFormComponent implements OnInit, OnChanges {
  @Input() initialValues: Product | null = null;
  @Output() onSubmitForm: EventEmitter<FormData> = new EventEmitter<FormData>();

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
    this.productForm.patchValue({
      image: file,
    });
  }

  onSubmitProductForm(values: any): void {
    const formData = new FormData();
    Object.keys(values).forEach(key => {
      formData.append(key, values[key]);
    });

    this.onSubmitForm.emit(formData);
  }
}
