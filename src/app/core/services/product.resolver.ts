import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {

    return this.productService.getProductByCode(+route.params['code']);
  }
}
