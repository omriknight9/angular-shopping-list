import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

	get productList() {return this._productList}
	get orderedProductList() {return this._orderedProductList}

	public sum: number = 0;
	public count: number = 0;

	private _productList: IProduct[] = [
		{name: 'OnePlus 5T', image: 'assets/images/oneplus.png', price: 500,count:0},
		{name: 'Samsung Galaxy S9', image: 'assets/images/samsung.png', price: 800,count:0},
		{name: 'Ferrari 458 Italia', image: 'assets/images/ferrari.png', price: 700000,count:0},
		{name: 'K.I.T.T', image: 'assets/images/kitt.png', price: 300000,count:0},
		{name: 'Samsung Computer Screen', image: 'assets/images/samsung-tv.png', price: 1200,count:0},
		{name: 'Lenovo IdeaPad V110', image: 'assets/images/lenovo.png', price: 1500,count:0},
	]
	

	private _orderedProductList: IProduct[] = [];

	orderProduct(index: number) {
		if (!this._orderedProductList.includes(this._productList[index])) {
			this._orderedProductList.push(this._productList[index]);
		}
	}
}
