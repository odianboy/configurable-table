import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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

getProductByCode(code: number): any {
  const products = this._products$.getValue();
  return products.find(item => item.code === code);
}

updateProduct(product: Product) {
  const products = this._products$.getValue();

  let idx = products.findIndex(item => item.code === product.code)
  products.splice(idx, idx, product)

  console.log(products[idx]);

  this._products$.next(products);
}
  
}
