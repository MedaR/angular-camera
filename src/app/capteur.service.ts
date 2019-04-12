import { Injectable } from '@angular/core';
import { Capteur } from './capteur';
import { StockCapteur } from './stock-capteur';
import { Observable, of,from } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CapteurService {

	private capteurUrl = 'http://localhost:8080/private/api/sensors';
	
  constructor(private http: HttpClient) { }

  getCapteur(): Observable<Capteur[]>{
     //console.log(this.http.get<Capteur[]>(this.capteurUrl));
  	 return of (StockCapteur);       
    } 
/*
  getCapteurs(): Observable<Capteur[]>{
    // this.messageService.add('SensorService : fetching sensors');
    // return of(SENSORS);
    console.log(this.http.get<Capteur[]>(this.capteurUrl))
    return this.http.get<Capteur[]>(this.capteurUrl)
      .pipe(
        tap(_ => this.log('fetched sensors')),
        catchError(this.handleError('getSensors',[]))
      )
  }
  private log(message:string){
    //this.messageService.add(`SensorService: ${message}`)
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  sensors: Capteur[];
  fetchSensors(): Observable<Capteur[]>{
	// this.messageService.add('SensorService : fetching sensors');
	// return of(SENSORS);
	return this.http.get<Capteur[]>(this.capteurUrl)
	.pipe(
		tap(_ => this.log('fetched sensors')),
			catchError(this.handleError('getSensors',[]))
	)
}

  getFetchedSensors():Capteur[]{
	this.fetchSensors()
	.subscribe(sensors => this.sensors = sensors)
		console.log("^^^^^^");
		console.log("aa :" +this.sensors);
		return this.sensors	
	
	}
*/
}
