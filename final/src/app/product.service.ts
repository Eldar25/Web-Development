import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {from, Observable, of} from "rxjs";
import {Product} from './product'
import {Products} from './products'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private urlProducts = 'http://localhost:4200/products';
  
  products = Products;
  productDeteil:Product;

  constructor(
    private http : HttpClient
  ) { }

  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.urlProducts);
  }

  getId(id):void{
    for(let product of this.products){
      if(id == product.id){
        this.productDeteil = product
      }else{
        this.productDeteil = product
      }
    }
  }

}
