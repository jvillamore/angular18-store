import {
	Component,
	Input,
	signal,
	SimpleChange,
	SimpleChanges,
} from '@angular/core';
import { IProduct } from '../../models/product.model';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [],
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
})
export class HeaderComponent {
	hideSideMenu = signal(true);
	@Input({ required: true }) cart: IProduct[] = [];
	total = signal(0);

	toogleSideMenu() {
		this.hideSideMenu.update((hideMenu) => !hideMenu);
	}

	calculateTotal() {
		return this.cart.reduce((total, product) => total + product.price, 0);
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes['cart']) this.total.set(this.calculateTotal());
	}

	removeItemCart(item: IProduct) {
		this.cart = this.cart.filter((s) => s.id != item.id);
	}
}
