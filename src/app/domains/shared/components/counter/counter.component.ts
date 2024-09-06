import { Component, Input, SimpleChange } from '@angular/core';

@Component({
	selector: 'app-counter',
	standalone: true,
	imports: [],
	templateUrl: './counter.component.html',
	styleUrl: './counter.component.css',
})
export class CounterComponent {
	@Input({ required: true }) duration = 0;
	@Input({ required: true }) message = '';

	constructor() {
		console.log('constructor');
		console.log('-'.repeat(20));
	}
	ngOnChanges(event: SimpleChange) {
		console.log('ngOnChanges');
		console.log(event);
		console.log('-'.repeat(20));
	}

	ngOnInit() {
		console.log('ngOnInit');
		console.log('-'.repeat(20));
		console.log('duration :', this.duration);
		console.log('message :', this.message);
	}

	ngAfterViewInit() {
		// after reder.
		// despues que los hijos fueron renderizados.
		console.log('ngAfterViewInit');
		console.log('-'.repeat(20));
	}

	ngOnDestroy() {
		// cuando un componente es destruido.
		console.log('ngOnDestroy');
		console.log('-'.repeat(20));
	}
}
