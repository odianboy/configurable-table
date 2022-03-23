import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { SHOP_DATA } from '../shared/product-data.const';
import { Product } from '../shared/product.interfaces';

@Component({
  selector: 'app-config-table',
  templateUrl: './config-table.component.html',
  styleUrls: ['./config-table.component.scss']
})
export class ConfigTableComponent implements OnInit {

  displayedColumns: string[] = this.columsTable();
  dataShop = new MatTableDataSource<Product>(SHOP_DATA);
  selection = new SelectionModel<Product>(true, []);

  opened = false;

  constructor() { }

  ngOnInit(): void {
  }

  columsTable() {
    return ['select', 'name', 'code', 'photo', 'brand', 'price', 'crossedPrice', 'datePublished', 'isActive'];
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataShop.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataShop.data);
  }

  checkboxLabel(row?: Product): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row`;
  }

}
