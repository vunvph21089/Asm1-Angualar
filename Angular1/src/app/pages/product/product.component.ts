import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { IProduct } from 'src/app/interface/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  productList!:IProduct[]
  
  constructor(private productService: ServicesService){
    this.productService.getAllProducts().subscribe(data =>{
     this.productList = data
   })
 }

 carts :any[] = this.productService.getCart();

 
 onAddCart(product: IProduct){
 
  let index = this.carts.findIndex((item) =>{
    return item.id == product.id
  })
  if(index>=0){
    this.carts[index].quantity += 1
  }else{
    let cartItem:any ={
      id:product.id,
      name:product.name,
      img:product.img,
      price:product.price,
      quantity:1,
    }
    this.carts.push(cartItem)

   }
  //  console.log(this.carts[0].subtotal());
  // let addCartJson = JSON.stringify(this.carts)
  // sessionStorage.setItem('cart', addCartJson)
  this.productService.saveCart(this.carts)
  alert("thêm vào giỏ hàng thành công")
 
  }
}
