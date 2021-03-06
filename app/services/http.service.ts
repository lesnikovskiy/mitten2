import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/finally";

import { WeatherCondition } from "../models/WeatherCondition";
import { Condition } from "../models/Condition";

@Injectable()
export class HttpService {
	key: string = "aa3285e74b824f26bab195813171506";

	private headers = new Headers({ "Content-Type": "application/json"});
	private options = new RequestOptions({headers: this.headers});

	constructor(private http: Http) {}

	getCurrentWeather(lat: number, lng: number): Observable<WeatherCondition> {
		const query: string = `${lat},${lng}`;
		const currentUrl: string = `http://api.apixu.com/v1/current.json?key=${this.key}&q=${query}`;

		return this.http.get(currentUrl, this.options)
			.map((res: Response) => res.json())
			.map(data => {
				const current = data.current;
				const condition = data.current.condition;

				return new WeatherCondition(
					current.last_updated,
					current.temp_c,
					current.temp_f,
					current.wind_kph,
					current.wind_dir,
					current.pressure_mb,
					current.humidity,
					current.feelslike_c,
					current.feelslike_f,
					new Condition(
						condition.text,
						condition.icon,
						condition.code
					)
				);
			})
			.catch(this.handleErrors);
	}

	getHistoryWeather(lat: number, lng: number, date: string): Observable<WeatherCondition[]> {
		const query: string = `${lat},${lng}`;
		const historicalUrl: string = `http://api.apixu.com/v1/history.json?key=${this.key}&q=${query}&dt=${date}`;

		this.http.get(historicalUrl, this.options)
			.map((res: Response) => res.json())
			.map(data => {
				// to be defined
				
			})
			.catch(this.handleErrors);
	}

	private handleErrors(error: Response) {
		console.log(JSON.stringify(error));

		return Observable.throw(error);
	}
}

/*
https://www.apixu.com/my/
http://api.apixu.com/v1/current.json?key=aa3285e74b824f26bab195813171506&q=50,30
http://api.apixu.com/v1/history.json?key=aa3285e74b824f26bab195813171506&q=50,30&dt=2017-06-15
 */
