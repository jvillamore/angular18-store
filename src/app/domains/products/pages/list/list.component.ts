import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { IProduct } from '../../../shared/models/product.model';

@Component({
	selector: 'app-list',
	standalone: true,
	imports: [ProductComponent],
	templateUrl: './list.component.html',
	styleUrl: './list.component.css',
})
export class ListComponent {
	products = signal<IProduct[]>([]);

	constructor() {
		const initProducts: IProduct[] = [
			{
				id: Date.now(),
				title: 'product 001',
				price: 1,
				image: 'https://picsum.photos/300/300?r=1',
				createAt: new Date().toUTCString(),
			},
			{
				id: Date.now(),
				title: 'product 002',
				price: 2,
				image: 'https://picsum.photos/300/300?r=2',
				createAt: new Date().toUTCString(),
			},
			{
				id: Date.now(),
				title: 'product 003',
				price: 3,
				image: 'https://picsum.photos/300/300?r=3',
				createAt: new Date().toUTCString(),
			},
			{
				id: Date.now(),
				title: 'product 001',
				price: 1,
				image: 'https://picsum.photos/300/300?r=1',
				createAt: new Date().toUTCString(),
			},
			{
				id: Date.now(),
				title: 'product 002',
				price: 2,
				image: 'https://picsum.photos/300/300?r=2',
				createAt: new Date().toUTCString(),
			},
			{
				id: Date.now(),
				title: 'product 003',
				price: 3,
				image: 'https://picsum.photos/300/300?r=3',
				createAt: new Date().toUTCString(),
			},
		];
		this.products.set(initProducts);
	}

	addProductToCart(event: string) {
		console.log(event);
	}
}
