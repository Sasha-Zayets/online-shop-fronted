import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Product} from '../../../../core/models/product';
import { ProductsService } from '../../../../core/services/products.service';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmRemoveDialogComponent} from '../../components/confirm-remove-dialog/confirm-remove-dialog.component';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'available', 'actions'];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private readonly productsService: ProductsService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.dataSource = new MatTableDataSource<Product>([]);
  }

  ngOnInit(): void {
    this.getProductsAndInitValues();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getProductsAndInitValues(): void {
    this.productsService.getAllProducts().subscribe((products) => {
      this.dataSource = new MatTableDataSource<Product>(products);
    });
  }

  openConfirmDialog(): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmRemoveDialogComponent);

    return dialogRef.beforeClosed();
  }

  removeProduct(idProduct: number): void {
    this.openConfirmDialog().subscribe((result) => {
      if (result) {
        this.productsService.deleteProduct(idProduct).subscribe(() => {
          this.getProductsAndInitValues();
          this.snackBar.open('Product deleted successfully', '', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        });
      }
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

