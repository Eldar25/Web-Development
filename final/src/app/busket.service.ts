import { Injectable } from '@angular/core';
import {from, Observable, of} from "rxjs";
import {Product} from '../app/product'
import {Products} from '../app/products'

@Injectable({
  providedIn: 'root'
})
export class BusketService {

  constructor() { }

  products:Product[] =[];

  addElement(object): void{
    this.products.push(object);
  }

  getElements(){
    return this.products;
  }
  deleteElement(object):void{
    this.products.slice(object.id,1);
  }

}
