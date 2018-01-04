import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Message } from './message';
import { LANDINGMSG } from './mock-landing';

@Injectable()
export class LandingService {

  constructor( ) { }

	getMessages(): Observable<Message[]> {
		return of(LANDINGMSG);
	}

	getMessage(id: number): Observable<Message> {
		return of(LANDINGMSG.find(msg => msg.id === id));
	}


}
