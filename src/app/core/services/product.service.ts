import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { ProductDataMockService } from './product-data-mock.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products$: Observable<Product[]>;
  private _products$: BehaviorSubject<Product[]>;

constructor(private mockDataServices: ProductDataMockService) { 
  this._products$ = new BehaviorSubject(this.mockDataServices.generateRandomProducts());
  this.products$ = this._products$.asObservable();
};

getProductByCode(code: number): Observable<Product> {
  const products = this._products$.getValue();
  return of(products.find(item => item.code === code) as Product);
}

updateProduct(product: Product) {
  const products = this._products$.getValue();

  let idx = products.findIndex(item => item.code === product.code);

  products.splice(idx, 1, product);

  this._products$.next(products);
}
  
}
