import { Component } from '@angular/core';
import { Column } from '../../core/interfaces/column.interface';

import { map, Observable } from 'rxjs';
import { ColumnService } from '../../core/services/column.service';

import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-config-sidenav',
  templateUrl: './config-sidenav.component.html',
  styleUrls: ['./config-sidenav.component.scss']
})
export class ConfigSidenavComponent  {
  opened: boolean = false;
  columns$: Observable<Column[]>;

  constructor(private columnService: ColumnService) {
    this.columns$ = columnService.columns$.pipe(
      map(columns => columns.filter((column) => !column.static))
    );
  };

  updateDisplay(ref: string): void {
    this.columnService.updateDisplayCheck(ref);
  };

  drop(event: CdkDragDrop<string[]>) {
    this.columnService.changeOfPosition(event);
  };
}
