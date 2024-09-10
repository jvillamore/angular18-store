import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { ProductComponent } from '@/products/components/product/product.component';
import { IProduct } from '@/shared/models/product.model';
import { HeaderComponent } from '@/shared/components/header/header.component';
import { CartService } from '@/shared/services/cart.service';
import { ProductService } from '@/shared/services/product.service';
import { CategoryService } from '@/shared/services/category.service';
import { ICategory } from '@/shared/models/category.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
	selector: 'app-list',
	standalone: true,
	imports: [ProductComponent, HeaderComponent, RouterLinkWithHref],
	templateUrl: './list.component.html',
	styleUrl: './list.component.css',
})
export class ListComponent {
	products = signal<IProduct[]>([]);
	categories = signal<ICategory[]>([]);
	private cartService = inject(CartService);
	private productService = inject(ProductService);
	private categoriesService = inject(CategoryService);

	@Input() category_id!: string;

	ngOnInit() {
		this.getProducts();
		this.getCategories();
	}

	ngOnChanges(changes: SimpleChanges) {
		const categoryId = changes['category_id'];
		if (categoryId) this.getProducts();
	}

	private getProducts() {
		this.productService.getProducts(this.category_id).subscribe({
			next: (result) => {
				this.products.set(result);
			},
			error: () => {},
		});
	}

	private getCategories() {
		this.categoriesService.getCategories().subscribe({
			next: (result) => {
				this.categories.set(result);
			},
			error: () => {},
		});
	}

	addProductToCart(prod: IProduct) {
		this.cartService.addProduct(prod);
	}
}
