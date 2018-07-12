import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { IProduct } from '../models/iproduct';

@Component({
  selector: 'app-root',
  template:`
    <app-cart
      (qntMessenger)="getQnt($event)"
      (totalPriceMessenger)="getTotalPrice($event)"
      [orderedList]="orderedProductList"
      [quantity]="quantity"
      [totalPrice]="totalPrice"
    ></app-cart>

    <app-product-list
      [products]='productList'
      (indexMessenger)="counter($event)"
      >
    ></app-product-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public productList: IProduct[] = [];
  public orderedProductList: IProduct[] = [];

  public quantity: number = 0;
  public totalPrice: number = 0;
  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.productList = this.dataService.productList;
    this.orderedProductList = this.dataService.orderedProductList;
  }

  counter(index) {
    this.quantity++;
    this.totalPrice += this.productList[index].price;
  }

  getTotalPrice(price: number) {
    this.totalPrice = price;
  }


  getQnt(qnt: number) {
    this.quantity = qnt;
  }

  getTotal(price) {
    this.totalPrice += price;
  }
}
