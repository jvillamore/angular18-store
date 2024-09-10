import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

@Pipe({
	name: 'timeAgo',
	standalone: true,
})
export class TimeAgoPipe implements PipeTransform {
	transform(value: string | undefined): string {
		if (value !== undefined)
			return formatDistanceToNow(new Date(value), {
				addSuffix: true,
				locale: es,
			});
		else return '';
	}
}
