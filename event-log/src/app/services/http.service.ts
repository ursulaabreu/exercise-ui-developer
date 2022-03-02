import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models';
import { environment as env } from 'src/environments/environment';

@Injectable({
  	providedIn: 'root'
})
export class HttpService {

  	constructor(private http: HttpClient) { }

	getEventList() : Observable<Array<Event>>{
		return this.http.get<Array<Event>>(`${env.BASE_URL}/events`);
	}
}
