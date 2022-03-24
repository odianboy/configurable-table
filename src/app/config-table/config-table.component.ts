import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { SHOP_DATA } from '../shared/product-data.const';
import { NameColumm, Product } from '../shared/product.interfaces';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-config-table',
  templateUrl: './config-table.component.html',
  styleUrls: ['./config-table.component.scss']
})
export class ConfigTableComponent implements OnInit {

  displayedColumns: string[] = this.columsTable();
  dataShop = new MatTableDataSource<Product>(SHOP_DATA);
  selection = new SelectionModel<Product>(true, []);
  nameColumns: string[] = this.nameColumsTable();
  coloredRow: any;
  displayColumnName: boolean;
  allComplete: boolean = false;

  nameColProduct!: FormControl;

  opened: boolean = false;

 column_date: NameColumm = {
    name: 'Выбрать все',
    select: false,
    subNameColumn: [
        {name: 'Название товара', select: false},
        {name: 'Код товара', select: false},
        {name: 'Фото товара', select: false},
        {name: 'Бренд товара', select: false},
        {name: 'Цена товара', select: false},
        {name: 'Перечеркнутая цена', select: false},
        {name: 'Дата публикации', select: false},
        {name: 'Активность товара', select: false},
    ]
}

  constructor() {
    this.nameColProduct = new FormControl();
    this.displayColumnName = false

    this.nameColProduct.valueChanges.subscribe((value) => {
     this.displayColumnName = value
    })
  }

  ngOnInit(): void {
  }

  columsTable() {
    return ['select', 'name', 'code', 'photo', 'brand', 'price', 'crossedPrice', 'datePublished', 'isActive'];
  }

  nameColumsTable() {
    return ['Название товара', 'Код товара', 'Фото товара', 'Бренд товара', 'Цена товара', 'Перечеркнутая цена', 'Дата публикации', 'Активность товара']
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

  updateAllComplete() {
    this.allComplete = this.column_date.subNameColumn != null && this.column_date.subNameColumn.every(t => t.select);
  }

  someComplete(): boolean {
    if (this.column_date.subNameColumn == null) {
      return false;
    }
    return this.column_date.subNameColumn.filter(t => t.select).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.column_date.subNameColumn == null) {
      return;
    }
    this.column_date.subNameColumn.forEach(t => (t.select = completed));
  }
}
