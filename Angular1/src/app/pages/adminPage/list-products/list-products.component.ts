import { Component} from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { IProduct } from 'src/app/interface/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
productList!:IProduct[]


constructor(private productService: ServicesService){
   this.productService.getAllProducts().subscribe(data =>{
    this.productList = data
  })
}

removeItem(id : number){
 const confirm = window.confirm('Are you sure you want to delete')
 if(confirm){
  this.productService.deleteProduct(id).subscribe(() =>{
  this.productList = this.productList.filter(item => item.id !== id)
  })
 }
}
}
