import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProduct } from '../models/product.model';
import { map } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	private http = inject(HttpClient);

	constructor() {}

	getProducts(categoryId?: string) {
		const url = new URL('https://api.escuelajs.co/api/v1/products');
		if (categoryId) url.searchParams.set('categoryId', categoryId);
		return this.http.get<IProduct[]>(url.toString()).pipe(
			map((products) =>
				products.map((product) => ({
					...product,
					images: product.images.map((image) =>
						this.cleanAndParseImageUrl(image)
					),
					createAt: new Date().toString(),
				}))
			)
		);
	}

	getOne(id: string) {
		return this.http
			.get<IProduct>(`https://api.escuelajs.co/api/v1/products/${id}`)
			.pipe(
				map((product) => ({
					...product,
					images: product.images.map((image) =>
						this.cleanAndParseImageUrl(image)
					),
					createAt: new Date().toString(),
				}))
			);
	}

	private cleanAndParseImageUrl(image: string): string {
		let cleanedImage = image.replace(/^\["?|"?]$/g, '');
		try {
			cleanedImage = JSON.parse(cleanedImage);
		} catch (error) {
			//
		}
		return cleanedImage;
	}
}
