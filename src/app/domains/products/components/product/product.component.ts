import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-product',
	standalone: true,
	imports: [],
	templateUrl: './product.component.html',
	styleUrl: './product.component.css',
})
export class ProductComponent {
	@Input({ required: true }) img: string =
		'https://picsum.photos/300/300?r=' + Math.random();
	@Input({ required: true }) title: string = '';
	@Input({ required: true }) price: number = 0;

	@Output() addToCart = new EventEmitter();

	addToCartHandler() {
		console.log('click from the component' + this.title);
		this.addToCart.emit('respuesta desde el componente');
	}
}
