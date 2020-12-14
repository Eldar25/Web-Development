import { Component, OnInit } from '@angular/core';
import { BusketService } from '../busket.service'

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  constructor( private basketService : BusketService) { }

  ngOnInit(): void {
  }

  products = this.basketService.products;

  delete(product):void{
    this.basketService.deleteElement(product);
  }
  
}
