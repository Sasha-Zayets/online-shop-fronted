import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { CategoriesService } from './services/categories.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [ApiService, CategoriesService],
})
export class CoreModule { }
