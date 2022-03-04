import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EventViewModel } from 'src/app/models/event-view-model';

import { EventTimelineComponent } from './event-timeline.component';

const mockEvents: EventViewModel[] = [
	{
		timestamp: new Date('2021-08-01T12:00:00.000Z'),
		color: '#f58e59',
		hover: false,
		level: 'WARNING',
		showOnTable: true,
		levelText: 'Warning',
		message: 'Metric 1 is above the warning threshold',
	}
];

describe('EventTimelineComponent', () => {
	let component: EventTimelineComponent;
	let fixture: ComponentFixture<EventTimelineComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
		declarations: [ EventTimelineComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(EventTimelineComponent);
		component = fixture.componentInstance;
		component.events = mockEvents;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should set hover', () => {
		const emitSpy = spyOn(component.eventsChange, 'emit');

		const row = fixture.debugElement.query(By.css('li')).nativeElement;
		row.dispatchEvent(new MouseEvent('mouseover', {
			view: window,
			bubbles: true,
			cancelable: true,
		}));
		fixture.detectChanges();

		expect(row).toHaveClass('event-hover');
		expect(emitSpy).toHaveBeenCalled();
	});
});
