import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICategory } from '../models/category.model';
import { map } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CategoryService {
	private http = inject(HttpClient);
	constructor() {}

	getCategories() {
		return this.http
			.get<ICategory[]>('https://api.escuelajs.co/api/v1/categories')
			.pipe(
				map((products) =>
					products.map((product) => ({
						...product,
						image: this.cleanAndParseImageUrl(product.image),
					}))
				)
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
