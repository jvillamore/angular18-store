import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '@/products/components/product/product.component';
import { IProduct } from '@/shared/models/product.model';
import { HeaderComponent } from '@/shared/components/header/header.component';
import { CartService } from '@/shared/services/cart.service';
import { ProductService } from '@/shared/services/product.service';

@Component({
	selector: 'app-list',
	standalone: true,
	imports: [ProductComponent, HeaderComponent],
	templateUrl: './list.component.html',
	styleUrl: './list.component.css',
})
export class ListComponent {
	products = signal<IProduct[]>([]);
	private cartService = inject(CartService);
	private productService = inject(ProductService);

	ngOnInit() {
		this.productService.getProducts().subscribe({
			next: (result) => {
				this.products.set(result);
			},
			error: () => {},
		});
	}

	addProductToCart(prod: IProduct) {
		this.cartService.addProduct(prod);
	}
}
