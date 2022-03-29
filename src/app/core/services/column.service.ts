import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { COLUMNS_DATA } from '../consts/column-data.const';
import { Column } from '../interfaces/column.interface';

import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class ColumnService {

  columns$: Observable<Column[]>;
  private _columns$: BehaviorSubject<Column[]>;
  
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

  changeOfPosition(event: CdkDragDrop<string[]>) {
    let staticElement = new Map();
    const columns = this._columns$.getValue();
    let idxStatic = columns.findIndex(item => item.static);

    if (idxStatic !== -1) {
      staticElement.set(idxStatic, columns[idxStatic]);
      columns.splice(idxStatic, 1);
    };

    let element = columns[event.previousIndex];

    columns.splice(event.previousIndex, 1);
    columns.splice(event.currentIndex, 0, element);
    columns.splice(idxStatic, 0, staticElement.get(idxStatic));

    this._columns$.next(columns);
  };
}
