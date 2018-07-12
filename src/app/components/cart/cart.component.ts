import { Component, Input, Output, EventEmitter} from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { DataService } from '../../services/data-service.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
	@Input('orderedList')
	public list: IProduct[] = [];

	@Input()
	public quantity: number;

	@Input()
	public totalPrice: number;

	@Output()
	qntMessenger: EventEmitter<number> = new EventEmitter();

	@Output()
	totalPriceMessenger: EventEmitter<number> = new EventEmitter();

	constructor(private dataService: DataService) {}

	showShoppingList() {
		document.querySelector('#shoppingCartContainer').classList.toggle('hideAndShow');
	}

	substract(qnt:number, index: number): void {
		qnt--;
		this.quantity--;
		this.totalPrice -= this.list[index].price;
		let i = this.dataService.productList.indexOf(this.list[index]);
		this.dataService.productList[i].count = qnt;
		if (qnt < 1) {
			this.list.splice(index, 1)
		}
		this.qntMessenger.emit(this.quantity);
		this.totalPriceMessenger.emit(this.totalPrice);
	}

	order() {
		if (this.totalPrice == 0) {
			var errorParagraph = $('<p>', {
				text: `Can't Order Nothing!`,
				class:'errorParagraph'
			}).appendTo($('.errorDiv'));
			setTimeout(() => {
			  $('.errorParagraph').fadeOut('slow', function() {
			    $('.errorParagraph').remove();
			  });
			}, 500)

		} else {
			var orderedParagraph = $('<p>', {
				text: `Order Was Placed`,
				class:'orderParagraph'
			}).appendTo($('.errorDiv'));
			setTimeout(() => {
			  $('.orderParagraph').fadeOut('slow', function() {
			    $('.orderParagraph').remove();
			  });
			}, 500)
			
		}
	}
}
