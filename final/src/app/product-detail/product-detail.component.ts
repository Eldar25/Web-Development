import { Component, OnInit } from '@angular/core';
import { Products} from '../products'
import {Product} from '../product'
import {ProductService} from '../product.service'
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private productService: ProductService) { }
  

  products:Product[] = Products;
  product: Product = Products[0];
 


  ngOnInit(): void {
  }

  


}
