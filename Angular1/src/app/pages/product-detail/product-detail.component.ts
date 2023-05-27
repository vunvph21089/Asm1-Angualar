import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ServicesService } from 'src/app/services/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product?:IProduct
  constructor(
    private productService: ServicesService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
      }, error => console.log(error.message))
    })
  }
}
