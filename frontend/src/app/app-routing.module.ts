import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LoginComponent } from './page/login/login.component';
import { OrdersComponent } from './page/orders/orders.component';
import { ProductEditComponent } from './page/product-edit/product-edit.component';
import { ProductsComponent } from './page/products/products.component';
import { UsersComponent } from './page/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products/edit/:id',
    component: ProductEditComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
