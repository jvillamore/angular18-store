import { IProduct } from '@/shared/models/product.model';
import { CartService } from '@/shared/services/cart.service';
import { ProductService } from '@/shared/services/product.service';
import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';

@Component({
	selector: 'app-product-detail',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './product-detail.component.html',
	styleUrl: './product-detail.component.css',
})
export default class ProductDetailComponent {
	private productService = inject(ProductService);
	private cartService = inject(CartService);
	@Input() id?: string;
	cover = signal('');

	product = signal<IProduct | null>(null);

	ngOnInit() {
		if (this.id) {
			this.productService.getOne(this.id).subscribe({
				next: (product) => {
					this.product.set(product);
					if (product.images.length > 0) this.cover.set(product.images[0]);
					console.log('asdsasdasdas', product.images[0]);
				},
			});
		}
	}

	changeCover(img: string) {
		this.cover.set(img);
	}

	addProducttoCart() {
		const product = this.product();
		if (product) this.cartService.addProduct(product);
	}
}
