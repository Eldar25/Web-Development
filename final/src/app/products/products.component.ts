import { Component, Input, OnInit } from '@angular/core';
import { Products} from '../products'
import {Product} from '../product'
import {ProductService} from '../product.service'
import { BusketService } from '../busket.service'
import {LoginService} from '../login.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  products:Product[] = Products;
  //products: Product[];
  

  constructor(private productService: ProductService,
              private basketService : BusketService,
              private loginService :LoginService
              ) { }

  ngOnInit(): void {
  }

  //getProducts():void{
 //   this.productService.getProduct().subscribe(products => this.products = products)
  //}



  logged = this.loginService.logged;

  addElementToBusket(product):void{
    this.basketService.addElement(product);
    //console.log(".");
  }
  getId(id):void{
    this.productService.getId(id);
  }
}
