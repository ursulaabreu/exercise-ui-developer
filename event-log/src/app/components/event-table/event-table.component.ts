import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from 'src/app/models';

@Component({
	selector: 'app-event-table',
	templateUrl: './event-table.component.html',
	styleUrls: ['./event-table.component.scss']
})
export class EventTableComponent implements OnInit {
	public displayedColumns: string[] = ['event-time', 'event-level', 'event-message'];
	@Input() events!: Array<Event>;
	@Output() eventsChange = new EventEmitter<Array<Event>>();

	constructor() { }

	ngOnInit(): void {
	}

	changeHover(row: Event, value: boolean) {
		row.hover = value;
		this.eventsChange.emit(this.events);
	}

	getShowEvents() {
		return this.events.filter((event) => {
			return event.showOnTable;
		});
	}
}
