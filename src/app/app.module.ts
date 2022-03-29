import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductItemComponent } from './pages/product-item/product-item.component'
import { ConfigTableComponent } from './pages/config-table/config-table.component';
import { ConfigSidenavComponent } from './pages/config-sidenav/config-sidenav.component';

import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ConfirmDialogComponent } from './pages/confirm-dialog/confirm-dialog.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};



@NgModule({
  declarations: [
    AppComponent,
    ConfigTableComponent,
    ConfigSidenavComponent,
    ProductItemComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    DragDropModule,
    MatPaginatorModule,
    MatInputModule,
    MatDialogModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
