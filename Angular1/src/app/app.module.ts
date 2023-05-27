import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/adminPage/dashboard/dashboard.component';
import { ListProductsComponent } from './pages/adminPage/list-products/list-products.component';
import { AddProductComponent } from './pages/adminPage/add-product/add-product.component';
import { EditProductComponent } from './pages/adminPage/edit-product/edit-product.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CartComponent } from './pages/cart/cart.component';
import { SigninComponent } from './component/client/signin/signin.component';
import { SignupComponent } from './component/client/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    ContactComponent,
    AboutComponent,
    DashboardComponent,
    ListProductsComponent,
    AddProductComponent,
    EditProductComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    NotFoundComponent,
    CartComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
