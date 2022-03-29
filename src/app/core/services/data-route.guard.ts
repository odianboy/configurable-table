import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import {ProductService} from  '../services/product.service'

@Injectable({
  providedIn: 'root'
})
export class DataRouteGuard implements CanActivate {

  constructor(
    private productService: ProductService,
    private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const productCode = Number(route.params['code'])
      
    if (!this.productService.getProductByCode(productCode)) {
      this.router.navigate(['']);
      return false
    } else {
      return true
    }
  }
}
