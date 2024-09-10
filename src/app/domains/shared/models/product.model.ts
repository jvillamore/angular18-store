import { ICategory } from './category.model';

export interface IProduct {
	id: number;
	title: string;
	description: string;
	price: number;
	images: string[];
	createAt?: string;
	category: ICategory;
}
