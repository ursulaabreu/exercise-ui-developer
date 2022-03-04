import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventViewModel } from 'src/app/models/event-view-model';

@Component({
	selector: 'app-event-table',
	templateUrl: './event-table.component.html',
	styleUrls: ['./event-table.component.scss']
})
export class EventTableComponent implements OnInit {
	public displayedColumns: string[] = ['event-time', 'event-level', 'event-message'];
	@Input() events!: EventViewModel[];
	@Output() eventsChange = new EventEmitter<EventViewModel[]>();

	constructor() { }

	ngOnInit(): void {
	}

	changeHover(row: EventViewModel, value: boolean) {
		row.hover = value;
		this.eventsChange.emit(this.events);
	}

	getShowEvents() {
		return this.events.filter((event) => {
			return event.showOnTable;
		});
	}
}
