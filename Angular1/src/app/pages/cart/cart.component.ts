import { Component , OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  carts:any =[]
  totalQuantity:number = this.appService.getCartQuatity()
  totalPrice:number = this.appService.getCartPrice()

  constructor(
    private appService: ServicesService
  ){}
 
  ngOnInit():void {
    this.carts= this.appService.getCart()
  }
  subtotal(cart:any) {
    return cart.quantity * cart.price
  }
  updateQuantity(index:number, event:any){
    let newQuantity = event.target.value;
    newQuantity = newQuantity > 0 ? newQuantity : 1;
    event.target.value = newQuantity 
    this.carts[index].quantity= event.target.value
    this.appService.saveCart(this.carts)

    this.totalQuantity = this.appService.getCartQuatity()
    this.totalPrice= this.appService.getCartPrice()
  }

  giam(idex :number, quaty: any ){
    let newQuantity = parseInt(quaty) - 1;
    newQuantity = newQuantity > 0 ? newQuantity : 1;
    this.carts[idex].quantity = newQuantity;
    this.appService.saveCart(this.carts)

    this.totalQuantity = this.appService.getCartQuatity()
    this.totalPrice= this.appService.getCartPrice()
  }
  tang(idex :number, quaty: any ){
    let newQuantity = parseInt(quaty) + 1;
    newQuantity = newQuantity <= 100 ? newQuantity : 100;
    this.carts[idex].quantity = newQuantity;
    this.appService.saveCart(this.carts)

    this.totalQuantity = this.appService.getCartQuatity()
    this.totalPrice= this.appService.getCartPrice()
  }
  removeCart(index:number){
    const confirm = window.confirm("Are you sure you want to delete ")
   if(confirm){
    
    this.carts.splice(index,1)
    this.appService.saveCart(this.carts)

    this.totalQuantity = this.appService.getCartQuatity()
    this.totalPrice= this.appService.getCartPrice()
   }
  }

  removeCartAll(){   
  const confirm = window.confirm("Are you sure you want to delete ")
   if(confirm){
    sessionStorage.clear()
    this.carts=[]
   }
  }
}
