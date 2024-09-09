import { computed, Injectable, signal } from '@angular/core';
import { IProduct } from '../models/product.model';

@Injectable({
	providedIn: 'root',
})
export class CartService {
	cart = signal<IProduct[]>([]);
	total = computed(() => {
		const cart = this.cart();
		return cart.reduce((total, product) => total + product.price, 0);
	});

	constructor() {}

	addProduct(product: IProduct) {
		this.cart.update((prev) => [...prev, product]);
	}
}
