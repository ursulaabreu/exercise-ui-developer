import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventViewModel } from 'src/app/models/event-view-model';
import { EventService } from 'src/app/services/event.service';

@Component({
	selector: 'app-event-log-page',
	templateUrl: './event-log-page.component.html',
	styleUrls: ['./event-log-page.component.scss']
})
export class EventLogPageComponent implements OnInit, OnDestroy {
	public events: EventViewModel[] = [];
	private eventsSub!: Subscription;

	constructor(private eventService: EventService) { }

	ngOnInit(): void {
		this.eventsSub = this.eventService
			.getEvents()
			.subscribe((response: EventViewModel[]) => {
				this.events = response;
			});
	}

	ngOnDestroy(): void {
		if (this.eventsSub) {
			this.eventsSub.unsubscribe();
		}
	}
}
