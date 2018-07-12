import { Component, Input, Output, EventEmitter} from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-product-list',
  template:`
  <div class="container">
  	<app-product
		*ngFor="let product of products; index as i"
		[index]=i
		[product]="product"
		(productMessenger)="onAddProduct($event)"
		(indexMessenger)="getIndex($event)"
	></app-product>
  </div>
  `,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
	@Input()
	products: IProduct[];

	@Output()
	indexMessenger: EventEmitter<number> = new EventEmitter();

	getIndex(index) {
		this.indexMessenger.emit(index);
	}
}

