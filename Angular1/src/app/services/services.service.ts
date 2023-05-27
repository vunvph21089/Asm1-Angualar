import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { IProduct } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private  http: HttpClient
  ) {}
  getAllProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`http://localhost:3000/products`)
  }
  getProductById(id: number):Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`)
  }
  addProduct(product: IProduct): Observable<IProduct>{
    return this.http.post<IProduct>(`http://localhost:3000/products`,product)
  }
  editProduct(product: IProduct): Observable<IProduct>{
    return this.http.patch<IProduct>(`http://localhost:3000/products/${product.id}`,product)
  }
  deleteProduct(id :any): Observable<IProduct>{
    return this.http.delete<IProduct>(`http://localhost:3000/products/${id}`)
  }

  getCart(){
    let cartJson = sessionStorage.getItem('cart')
    if(cartJson){
      return JSON.parse(cartJson)
    } else{
      return []
    }
  }
  saveCart( carts:any){
    let cartJson = JSON.stringify(carts)
    sessionStorage.setItem('cart',cartJson)
  }


  getCartQuatity(){
    let carts = this.getCart();
    console.log(carts);
    let total :number = 0
    carts.forEach((item :any) => {
      total += item.quantity
    });
    return total
  }

  getCartPrice(){
    let carts = this.getCart();
    console.log(carts);
    
    let total :number = 0
    // for( let item of carts){
    //   total += item.quantity * item.price
    // }

    carts.forEach((item :any) => {
      total += item.quantity * item.price
    });
    return total
  }


  }


