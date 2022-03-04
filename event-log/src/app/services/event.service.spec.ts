import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EventService } from './event.service';
import { EventModel } from '../models/event-model';
import { EventViewModel } from '../models/event-view-model';

const eventData: EventModel[] = [
	{
		timestamp: "2021-08-01T12:00:00.000Z",
		level: "WARNING",
		message: "Metric 1 is above the warning threshold"
	},
	{
		timestamp: "2021-08-01T13:00:00.000Z",
		level: "ERROR",
		message: "Metric 1 is above the error threshold"
	}
];
const expectedData: EventViewModel[] = [
	{
		timestamp: new Date("2021-08-01T12:00:00.000Z"),
		color: "#f58e59",
		hover: false,
		level: "WARNING",
		showOnTable: true,
		levelText: "Warning",
		message: "Metric 1 is above the warning threshold",
	},
	{
		timestamp: new Date("2021-08-01T13:00:00.000Z"),
		color: "#924b6e",
		hover: false,
		showOnTable: true,
		levelText: "Error",
		level: "ERROR",
		message: "Metric 1 is above the error threshold"
	}
];
describe('EventService', () => {
	let service: EventService;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        }).compileComponents();
		service = TestBed.inject(EventService);
		httpTestingController = TestBed.inject(HttpTestingController);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should get events list', () => {
        service.getEvents().subscribe(response => {
            expect(response).toEqual(expectedData);
        });

        const req = httpTestingController.expectOne(`http://localhost:8080/events`);

        expect(req.request.method).toEqual('GET');

        req.flush(eventData);
    });
});
