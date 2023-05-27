import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ServicesService } from 'src/app/services/services.service';
import {FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  
  product!: IProduct

  productForm = this.formBuilder.group({
    name:['',[Validators.required, Validators.minLength(3)]],
    img:['',[Validators.required, Validators.minLength(3)]],
    price:[0,[]]
  })

  constructor(
    private ServicesService :ServicesService,
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private redirect: Router
  ){
    this.router.paramMap.subscribe(param =>{
      const id = Number(param.get('id'));
      this.ServicesService.getProductById(id).subscribe(product =>{
        this.product = product
        this.productForm.patchValue({
          name:product.name,
          img:product.img,
          price:product.price        
        })
      })
    })
  }
  onHandleUpdate(){
    if(this.productForm.valid){
      const newProduct : IProduct = {
        id:this.product.id,
        name:this.productForm.value.name || "",
        img:this.productForm.value.img || "",
        price:this.productForm.value.price || 0
        
      }
      this.ServicesService.editProduct(newProduct).subscribe(product =>{
        console.log(product);
        this.redirect.navigate(['/admin/product'])
      })
    }

  }
}
