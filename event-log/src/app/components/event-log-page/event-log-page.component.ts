import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Event, ResponseEvent } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
	selector: 'app-event-log-page',
	templateUrl: './event-log-page.component.html',
	styleUrls: ['./event-log-page.component.scss']
})
export class EventLogPageComponent implements OnInit, OnDestroy {
	public events: Array<Event> = [];
	private eventsSub!: Subscription;

	constructor(private httpService: HttpService) { }

	ngOnInit(): void {
		this.eventsSub = this.httpService
			.getEventList()
			.subscribe((response) => {
				this.configureEvents(response);
			});
	}

	configureEvents(response: Array<ResponseEvent>): void {
		let configuratedEvents: Array<Event> = [];
		response.forEach((event) => {
			configuratedEvents.push({
				timestamp: new Date(event.timestamp).toUTCString(),
				date: new Date(event.timestamp),
				color: this.getColor(event.level.toString()),
				hover: false,
				showOnTable: true,
				message: event.message,
				level:event.level,
				levelText: this.getLevelText(event.level.toString())
			});
		});

		this.events = configuratedEvents;
	}

	getColor(level: string): string {
		if (level === 'INFO') {
			return '#498fca';
		} else if (level === 'WARNING') {
			return '#f58e59';
		}
		return '#924b6e';
	}

	getLevelText(level: string): string {
		if (level === 'INFO') {
			return 'Information';
		} else if (level === 'WARNING') {
			return 'Warning';
		}
		return 'Error';
	}

	ngOnDestroy(): void {
		if (this.eventsSub) {
			this.eventsSub.unsubscribe();
		}
	}

}
