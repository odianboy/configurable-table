import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/pages/confirm-dialog/confirm-dialog.component';
import { ProductItemComponent } from 'src/app/pages/product-item/product-item.component';

@Injectable({
  providedIn: 'root'
})
export class ExitDataRouteGuard implements CanDeactivate<ProductItemComponent> {

  constructor(private dialog: MatDialog) {}
  
  canDeactivate(
    component: ProductItemComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (component.form.dirty) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent);
      return dialogRef.afterClosed();
    };
      
    return true;
  }
  
}
