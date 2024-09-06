import { Component, Input, signal, SimpleChanges } from '@angular/core';

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

	// Counter
	counter = signal(0);
	intervalCounter: number | undefined;

	constructor() {
		console.log('constructor');
		console.log('-'.repeat(20));
	}
	ngOnChanges(event: SimpleChanges) {
		console.log('ngOnChanges');
		console.log(event);
		console.log('-'.repeat(20));

		const duration = event['duration'];
		if (duration && duration.previousValue !== duration.currentValue)
			this.doSomething();
	}

	ngOnInit() {
		console.log('ngOnInit');
		console.log('-'.repeat(20));
		console.log('duration :', this.duration);
		console.log('message :', this.message);

		this.intervalCounter = window.setInterval(() => {
			console.log('run interval ');
			this.counter.update((statePrev) => statePrev + 1);
		}, 1000);
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
		window.clearInterval(this.intervalCounter);
	}

	doSomething() {
		console.log('doSomething');
	}
}
