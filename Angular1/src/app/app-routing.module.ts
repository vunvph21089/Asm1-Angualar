import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';


import { DashboardComponent } from './pages/adminPage/dashboard/dashboard.component';
import { ListProductsComponent } from './pages/adminPage/list-products/list-products.component';
import { AddProductComponent } from './pages/adminPage/add-product/add-product.component';
import { EditProductComponent } from './pages/adminPage/edit-product/edit-product.component';

import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CartComponent } from './pages/cart/cart.component';
import { SigninComponent } from './component/client/signin/signin.component';
import { SignupComponent } from './component/client/signup/signup.component';



const routes: Routes = [
{
  path:"",component:ClientLayoutComponent,children:[
    {path:"",component:HomeComponent},
    {path:"signin",component:SigninComponent},
    {path:"signup",component:SignupComponent},
    {path:"product",component:ProductComponent},
    {path:"product/:id",component:ProductDetailComponent},
    {path:"contact",component:ContactComponent},
    {path:"about",component:AboutComponent},
    {path:"cart",component:CartComponent}
  ]
},
{
  path:"admin",component:AdminLayoutComponent,children:[
    {path:"", redirectTo:"dashboard", pathMatch:"full" },
    {path:"dashboard",component:DashboardComponent},
    {path:"product",component:ListProductsComponent},
    {path:"product/add",component:AddProductComponent},
    {path:"product/:id/edit",component:EditProductComponent},
  ]
},
{path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
