import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseEvent } from '../models';
import { environment as env } from 'src/environments/environment';

@Injectable({
  	providedIn: 'root'
})
export class HttpService {

  	constructor(private http: HttpClient) { }

	getEventList() : Observable<Array<ResponseEvent>>{
		return this.http.get<Array<ResponseEvent>>(`${env.BASE_URL}/events`);
	}
}
