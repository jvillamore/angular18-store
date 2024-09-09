import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './domains/shared/components/header/header.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, HeaderComponent],
	template:
		'<div class="container mx-auto px-5"><app-header/><router-outlet /></div>',
})
export class AppComponent {
	title = 'angulat18-store';
}
