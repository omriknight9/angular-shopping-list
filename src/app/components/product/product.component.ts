import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-product',
  template: `
  <div class="product" (click)="add(index)">
  	<p>{{product.name}}</p>
  	<img id="productImage" src="{{product.image}}">
  	<p>Price: {{product.price}} $</p>
  	<p id="quantity">Quantity: {{product.count}}</p>
  </div>
  `,
  styleUrls: ['./product.component.css']
})
export class ProductComponent{
	@Input() 
	product: IProduct;
	@Input() 
	index:number;

	@Output()
	indexMessenger: EventEmitter<number> = new EventEmitter();

	constructor(private dataService: DataService) {}

	public add(index: number) {
		this.product.count++;
		this.dataService.orderProduct(this.index);
		this.indexMessenger.emit(index);
	}
}
