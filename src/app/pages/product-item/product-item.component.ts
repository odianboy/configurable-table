import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit{

  product$!: Observable<Product>

  constructor(
    private productService: ProductService,
    private activetedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.product$ = this.activetedRoute.data.pipe(
      map(data => data['product'])
    )
    this.product$.subscribe((value) => {
      console.log(value);
    })
  }

}
