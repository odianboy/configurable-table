import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take, tap } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  providers: [
    {
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: {
    appearance: 'outline'
  } as MatFormFieldDefaultOptions
}
]
})
export class ProductItemComponent {

  product!: Product;
  form: FormGroup;

  constructor(
    private productService: ProductService,
    private activetedRoute: ActivatedRoute,
    private router: Router
  ) {

    this.form = this.formGroupInit();

    this.activetedRoute.data.pipe(
      map(data => data['product']),
      tap(data => {
        this.form.patchValue(data)
        console.log(data);
        
      }),
      take(1)
    ).subscribe()
  };

formGroupInit(): FormGroup {
    return new FormGroup({
      name: new FormControl(null, Validators.required),
      code: new FormControl({value: null, disabled: true}),
      photo: new FormControl({value: null, disabled: true}),
      brand: new FormControl({value: null, disabled: true}),
      price: new FormControl(null, Validators.required),
      crossedPrice: new FormControl(null, Validators.required),
      isActive: new FormControl(null, Validators.required),
      datePublished: new FormControl({value: null, disabled: true})
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }
    this.form.markAsPristine();

    const productData: Product = this.form.getRawValue();
    this.productService.updateProduct(productData);

    this.goToTable();
  }

  goToTable() {
    this.router.navigate(['']);
  };
}
