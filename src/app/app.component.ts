import { HeaderComponent } from '@/shared/components/header/header.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, HeaderComponent],
	template: '<router-outlet />',
})
export class AppComponent {
	title = 'angulat18-store';
}
