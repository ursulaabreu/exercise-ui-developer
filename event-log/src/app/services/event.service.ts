import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { EventModel } from '../models/event-model';
import { ColorEventEnum } from '../models/color-event-enum';
import { EventViewModel } from '../models/event-view-model';
import { TextEventEnum } from '../models/text-event-enum';

@Injectable({
  	providedIn: 'root'
})
export class EventService {

  	constructor(private http: HttpClient) { }

	getEvents() : Observable<EventViewModel[]>{
		return this.http.get<EventModel[]>(`${env.BASE_URL}/events`).pipe(
			map(response => response.map(this.configureEvents))
		);
	}

	configureEvents(response: EventModel): EventViewModel {
		return {
			timestamp: new Date(response.timestamp),
			color: ColorEventEnum[response.level],
			hover: false,
			showOnTable: true,
			message: response.message,
			level: response.level,
			levelText: TextEventEnum[response?.level]
		};
	}
}

