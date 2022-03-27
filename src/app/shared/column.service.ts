import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { COLUMNS_DATA } from './column-data.const';
import { Column } from './column.interfaces';

import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class ColumnService {

  columns$: Observable<Column[]>;
  private _columns$: BehaviorSubject<Column[]>;

  columnsData: Column[] = [];

  constructor() { 
    this._columns$ = new BehaviorSubject(COLUMNS_DATA);
    this.columns$ = this._columns$.asObservable();
  };

  updateDisplayCheck(ref: string) {
    const columns = this._columns$.getValue();
    const idx = columns.findIndex(item => item.ref === ref);
    columns[idx].display = !columns[idx].display;
    this._columns$.next(columns);
  };

  dropArray(event: CdkDragDrop<string[]>) {
    const columns = this._columns$.getValue();
    let element = columns[event.previousIndex];

    columns.splice(event.previousIndex, 1);
    columns.splice(event.currentIndex, 0, element);

    this._columns$.next(columns)
  };
}
