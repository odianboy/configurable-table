import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductResolver } from './core/services/product.resolver';
import { ConfigSidenavComponent } from './pages/config-sidenav/config-sidenav.component';
import { ProductItemComponent } from './pages/product-item/product-item.component';

const routes: Routes = [
  { path: '', component: ConfigSidenavComponent },
  { path: 'product/:code', component: ProductItemComponent, resolve: {
    product: ProductResolver
  }},
  { path: '**', component:  ConfigSidenavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
