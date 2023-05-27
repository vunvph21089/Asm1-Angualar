import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ServicesService } from 'src/app/services/services.service';
import { FormGroup ,FormBuilder,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  productForm = this.formBuilder.group({
    name: ["",[Validators.required,Validators.minLength(3)]],
    price:[0],
    img:["",[Validators.required,Validators.minLength(10)]]
  })
  constructor(
    private productService: ServicesService,
    private formBuilder : FormBuilder,
    private redirect: Router
  ){}
    

  onHandleSubmit(){
    if(this.productForm.valid){
      const product: IProduct ={
        name:this.productForm.value.name || "",
        price:this.productForm.value.price || 0,
        img:this.productForm.value.img || ""
      }
      this.productService.addProduct(product).subscribe(product => {
        console.log(product);
      alert("Thêm thành công")
        this.redirect.navigate(["/admin/product"])
       
      })
    }
  }
}
