import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { SHOP_DATA } from '../shared/product-data.const';
import { Product } from '../shared/product.interfaces';
import { ColumnService } from '../shared/column.service';
import { map, Observable } from 'rxjs';


@Component({
  selector: 'app-config-table',
  templateUrl: './config-table.component.html',
  styleUrls: ['./config-table.component.scss']
})
export class ConfigTableComponent {

  dataShop = new MatTableDataSource<Product>(SHOP_DATA);
  selection = new SelectionModel<Product>(true, []);

  displayedColumns$: Observable<string[]>;

  constructor(private columnService: ColumnService) {
    this.displayedColumns$ =  this.columnService.columns$.pipe(
      map(value => value.filter(
        value => value.display != false
      ).map(value => value.ref)));
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
}
