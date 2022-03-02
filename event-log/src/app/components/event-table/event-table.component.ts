import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Event } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
	selector: 'app-event-table',
	templateUrl: './event-table.component.html',
	styleUrls: ['./event-table.component.scss']
})
export class EventTableComponent implements OnInit, OnDestroy {
	public displayedColumns: string[] = ['event-time', 'event-level', 'event-message'];
	public events: Array<Event> = [];
	private eventsSub!: Subscription;
	

	constructor(private httpService: HttpService) { }

	ngOnInit(): void {
		this.eventsSub = this.httpService
			.getEventList()
			.subscribe((response) => {
				console.log(response)
				this.events = response
				this.events.forEach((event) => {
					event.timestamp = new Date(event.timestamp).toUTCString();
				})
			})
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

	mouseOver(row: Event) {
		//console.log(row)
	}

	ngOnDestroy(): void {
		if (this.eventsSub) {
			this.eventsSub.unsubscribe();
		}
	}

}
