import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { By } from '@angular/platform-browser';
import { EventViewModel } from 'src/app/models/event-view-model';

import { EventTableComponent } from './event-table.component';

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

describe('EventTableComponent', () => {
	let component: EventTableComponent;
	let fixture: ComponentFixture<EventTableComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [EventTableComponent],
			imports: [
				MatTableModule,
				MatIconModule
			]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(EventTableComponent);
		component = fixture.componentInstance;
		component.events = mockEvents;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should show columns title', () => {
		const columnTime: HTMLElement = fixture.nativeElement.querySelector('.mat-column-event-time');
		expect(columnTime.textContent).toContain('Time (UTC)');

		const columnLevel: HTMLElement = fixture.nativeElement.querySelector('.mat-column-event-level');
		expect(columnLevel.textContent).toContain('Level');

		const columnMessage: HTMLElement = fixture.nativeElement.querySelector('.mat-column-event-message');
		expect(columnMessage.textContent).toContain('Message');
	});

	it('should set hover', () => {
		const emitSpy = spyOn(component.eventsChange, 'emit');

		const row = fixture.debugElement.query(By.css('.mat-row')).nativeElement;
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
