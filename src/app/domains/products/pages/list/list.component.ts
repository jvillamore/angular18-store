import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { log } from 'console';

@Component({
	selector: 'app-list',
	standalone: true,
	imports: [ProductComponent],
	templateUrl: './list.component.html',
	styleUrl: './list.component.css',
})
export class ListComponent {
	addProductToCart(event: string) {
		console.log(event);
	}
}
