import { Component } from '@angular/core';
import { Column } from '../shared/column.interfaces';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { BehaviorSubject, Observable } from 'rxjs';
import { ColumnService } from '../shared/column.service';

@Component({
  selector: 'app-config-sidenav',
  templateUrl: './config-sidenav.component.html',
  styleUrls: ['./config-sidenav.component.scss']
})
export class ConfigSidenavComponent  {
  opened: boolean = false;
  columns$: Observable<Column[]>;

  constructor(private columnService: ColumnService) {
    this.columns$ = columnService.columns$;
    
    this.columns$.subscribe((value) => {
      console.log(value);
    })
  }

  updateDisplay(ref: string): void {
    this.columnService.updateDisplayCheck(ref);
  }
}
