import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Product } from '../../core/interfaces/product.interface';
import { ColumnService } from '../../core/services/column.service';
import { map, Observable } from 'rxjs';
import { ProductDataMockService } from 'src/app/core/services/product-data-mock.service';

import { MatPaginator } from '@angular/material/paginator';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/product.service';


@Component({
  selector: 'app-config-table',
  templateUrl: './config-table.component.html',
  styleUrls: ['./config-table.component.scss']
})
export class ConfigTableComponent implements AfterViewInit {

  dataShop!: MatTableDataSource<Product>;
  selection = new SelectionModel<Product>(true, []);

  products$: Observable<Product[]>;
  displayedColumns$: Observable<string[]>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataShop.paginator = this.paginator;
  }

  constructor(
    private columnService: ColumnService,
    private productService: ProductService,
    private router: Router) {

    
    
    this.displayedColumns$ =  this.columnService.columns$.pipe(
      map(value => value.filter(
        value => value.display != false
      ).map(value => value.ref)));

    this.products$ = this.productService.products$;


    this.products$.subscribe( (value) => {
      this.dataShop = new MatTableDataSource<Product>(value);
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataShop.data.length;
    return numSelected === numRows;
  };

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    };
    this.selection.select(...this.dataShop.data);
  };

  checkboxLabel(row?: Product): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row`;
  };

  goToProduct(row: Product) {
    const productCode = row ? row.code: null;

    this.router.navigate(['product/', productCode]);
  };
}
