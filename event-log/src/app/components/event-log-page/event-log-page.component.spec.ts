import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponent, MockedComponent } from 'ng-mocks';
import { of } from 'rxjs';
import { EventViewModel } from 'src/app/models/event-view-model';
import { EventService } from 'src/app/services/event.service';
import { EventTableComponent } from '../event-table/event-table.component';
import { EventTimelineComponent } from '../event-timeline/event-timeline.component';

import { EventLogPageComponent } from './event-log-page.component';

const mockEvents: EventViewModel[] = [
	{
		timestamp: new Date("2021-08-01T12:00:00.000Z"),
		color: "#f58e59",
		hover: false,
		level: "WARNING",
		showOnTable: true,
		levelText: "Warning",
		message: "Metric 1 is above the warning threshold",
	}
];

describe('EventLogPageComponent', () => {
	let component: EventLogPageComponent;
	let fixture: ComponentFixture<EventLogPageComponent>;

	beforeEach(async () => {
		let eventService = { getEvents: () => of([]) }
		await TestBed.configureTestingModule({
			declarations: [
				EventLogPageComponent,
				MockComponent(EventTableComponent),
				MockComponent(EventTimelineComponent)
			],
			providers: [{
				provide: EventService, useValue: eventService
			}]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(EventLogPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should send corrects inputs to EventTableComponent', () => {
        component.events = mockEvents;
        fixture.detectChanges();
        const eventTableComponent = fixture.debugElement.query(By.directive(EventTableComponent))
            .componentInstance as MockedComponent<EventTableComponent>;
        expect(eventTableComponent.events).toEqual(mockEvents);
    });

	it('should send corrects inputs to EventTimelineComponent', () => {
        component.events = mockEvents;
        fixture.detectChanges();
        const eventTimelineComponent = fixture.debugElement.query(By.directive(EventTimelineComponent))
            .componentInstance as MockedComponent<EventTimelineComponent>;
        expect(eventTimelineComponent.events).toEqual(mockEvents);
    });
});
