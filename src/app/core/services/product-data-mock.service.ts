import { Injectable } from '@angular/core';
import { brands, names, photos } from '../consts/product-data.const';
import { Product } from '../interfaces/product.interface'

@Injectable({
  providedIn: 'root'
})
export class ProductDataMockService {

constructor() { }

generateRandomProducts(): Product[] {
  return Array.from({length: 100}, () => this.randomProduct())
};

randomProduct(): Product {
  return {
    name: this.randomProperty(names),
    code: this.genCode(1000000),
    photo: this.randomProperty(photos),
    brand: this.randomProperty(brands),
    price: this.genCode(1000),
    crossedPrice: this.genCode(3000),
    datePublished: this.randomDate(new Date(2018, 0, 1), new Date()),
    isActive: this.genBoolean()
  }
};

randomProperty<T>(arr: T[]):T {
  return arr[Math.floor(Math.random() * arr.length)];
};

genCode(before: number): number {
  return Math.round(Math.random() * before);
};

genBoolean():boolean {
  return (Math.floor(Math.random() * 2) === 0);
};

 randomDate(start: any, end: any): Date {
  return new Date(+start + Math.random() * (end - start));
};
}

