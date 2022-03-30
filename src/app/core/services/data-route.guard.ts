import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, of, switchMap, tap } from 'rxjs';

import {ProductService} from  '../services/product.service'

@Injectable({
  providedIn: 'root'
})
export class DataRouteGuard implements CanActivate {

  constructor(
    private activetedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

      const productCode = +route.params['code'];

      return this.productService.getProductByCode(productCode).pipe(
        map(data => !!data),
        tap((data) => {
          if (!data) {
            this.router.navigate(['']);
          }
        })
      );
  }
}
