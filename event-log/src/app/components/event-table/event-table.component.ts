import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
	selector: 'app-event-table',
	templateUrl: './event-table.component.html',
	styleUrls: ['./event-table.component.scss']
})
export class EventTableComponent implements OnInit {
	displayedColumns: string[] = ['time', 'level', 'message'];
	events: Array<Event> = [];

	constructor(private httpService: HttpService) { }

	ngOnInit(): void {
		this.httpService
			.getEventList()
			.subscribe((response) => {
				console.log(response)
				this.events = response
			})
	}

}
