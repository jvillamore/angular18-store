import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '@/shared/models/product.model';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '@/shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@/shared/pipes/time-ago.pipe';
import { RouterLinkWithHref } from '@angular/router';

@Component({
	selector: 'app-product',
	standalone: true,
	imports: [CommonModule, ReversePipe, TimeAgoPipe, RouterLinkWithHref],
	templateUrl: './product.component.html',
	styleUrl: './product.component.css',
})
export class ProductComponent {
	@Input({ required: true }) product!: IProduct;

	@Output() addToCart = new EventEmitter();

	addToCartHandler() {
		console.log('click from the component' + this.product.title);
		this.addToCart.emit('respuesta desde el componente');
	}
}
