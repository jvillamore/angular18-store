import { HighlightDirective } from '@/shared/directives/highlight.directive';
import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';
@Component({
	selector: 'app-wave-audio',
	standalone: true,
	imports: [HighlightDirective],
	templateUrl: './wave-audio.component.html',
	styleUrl: './wave-audio.component.css',
})
export class WaveAudioComponent {
	@Input({ required: true }) audioUrl!: string;
	@ViewChild('wave') containerAudio!: ElementRef;
	private ws!: WaveSurfer;
	isPlaying = signal(false);

	ngAfterViewInit() {
		this.ws = WaveSurfer.create({
			url: this.audioUrl,
			container: this.containerAudio.nativeElement,
		});
		this.ws.on('play', () => this.isPlaying.set(true));
		this.ws.on('pause', () => this.isPlaying.set(false));
	}

	actionMedia() {
		this.ws.playPause();
	}
}
