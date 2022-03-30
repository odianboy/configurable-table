import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataRouteGuard } from './core/services/data-route.guard';
import { ExitDataRouteGuard } from './core/services/exit-data-route.guard';
import { ProductResolver } from './core/services/product.resolver';
import { ConfigSidenavComponent } from './pages/config-sidenav/config-sidenav.component';
import { ProductItemComponent } from './pages/product-item/product-item.component';

const routes: Routes = [
  { path: '', component: ConfigSidenavComponent },
  { path: ':code',
    component: ProductItemComponent,
    resolve: {
      product: ProductResolver}, 
    canActivate: [DataRouteGuard],
    canDeactivate: [ExitDataRouteGuard]
  },
  { path: '**', component:  ConfigSidenavComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }