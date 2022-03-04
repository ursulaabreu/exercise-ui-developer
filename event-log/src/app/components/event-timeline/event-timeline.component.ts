import {
	AfterViewInit,
	Component,
	ElementRef,
	Input,
	QueryList,
	ViewChild,
	ViewChildren,
	EventEmitter,
	OnInit, 
	Output
  } from '@angular/core';
import { EventViewModel } from 'src/app/models/event-view-model';

@Component({
	selector: 'app-event-timeline',
	templateUrl: './event-timeline.component.html',
	styleUrls: ['./event-timeline.component.scss']
})
export class EventTimelineComponent implements OnInit, AfterViewInit {
	@ViewChild('eventsWrapper')
	eventsWrapper!: ElementRef;

	@ViewChildren('timelineEvents')
	timelineEvents!: QueryList<ElementRef>;

	@Input() events!: EventViewModel[];

	@Output() eventsChange = new EventEmitter<EventViewModel[]>();

	viewInitialized = false;

	eventSize: number = 66;

	constructor() { }

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
		this.viewInitialized = true;
		this.initView();
	}

	private initView(): void {
		if (!this.viewInitialized) {
			return;
		}

		if (this.events && this.events.length) {
			this.setDatePosition(this.events);
		}
	}

	private setDatePosition(elements: EventViewModel[]) {
		let timelineEventsArray = this.timelineEvents.toArray();
		let i: number = 0;
		let minDifference = this.minutesDiff(elements[0].timestamp, elements[elements.length-1].timestamp);
		let minLength = (this.eventsWrapper.nativeElement.offsetWidth - (this.eventSize * (elements.length + 1)))/minDifference;

		for (let component of elements) {
			let distanceFirstEvent = this.minutesDiff(elements[0].timestamp, component.timestamp);
			timelineEventsArray[i].nativeElement.style.left = ((distanceFirstEvent * minLength) + (this.eventSize / 2) + (elements.indexOf(component) * this.eventSize)) + 'px';
			i++;
		}
	}

	private minutesDiff(first: Date, second: Date): number {
		return (second.getTime() - first.getTime()) / 60000;
	}

	changeHover(event: EventViewModel, value: boolean) {
		event.hover = value;
		this.eventsChange.emit(this.events);
	}
}
