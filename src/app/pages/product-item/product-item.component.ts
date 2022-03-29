import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, take, tap } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {

  product$: Observable<Product>;
  product!: Product;

  form: FormGroup;

  constructor(
    private productService: ProductService,
    private activetedRoute: ActivatedRoute,
    private router: Router
  ) {

    this.product$ = this.activetedRoute.data.pipe(
      map(data => data['product'])
    );

    // activetedRoute.data.pipe(
    //   map(data => data['product']),
    //   tap(data => this.form.patchValue(data)),
    //   take(1)
    // ).subscribe()
    
    this.product$.subscribe((value) => {
      this.product = value
    })

    this.form = this.formGroupInit();

  };

  formGroupInit(): FormGroup {
    return new FormGroup({
      name: new FormControl(this.product.name, Validators.required),
      code: new FormControl({value: this.product.code, disabled: true}),
      photo: new FormControl({value: this.product.photo, disabled: true}),
      brand: new FormControl({value: this.product.brand, disabled: true}),
      price: new FormControl(this.product.price, Validators.required),
      crossedPrice: new FormControl(this.product.crossedPrice, Validators.required),
      isActive: new FormControl(this.product.isActive, Validators.required),
      datePublished: new FormControl({value: (this.product.datePublished), disabled: true})
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    const productData: Product = this.form.getRawValue();
    this.productService.updateProduct(productData);

    this.goToTable();
  }

  goToTable() {
    this.router.navigate(['']);
  };
}
