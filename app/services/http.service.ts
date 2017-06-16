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
		console.log(currentUrl);

		return this.http.get(currentUrl, this.options)
			.map((res: Response) => res.json())
			.map(data => {
				const current = data.current;
				const condition = data.current.condition;

				return new WeatherCondition(
					current.temp_c,
					current.temp_f,
					new Condition(
						condition.text,
						condition.icon,
						condition.wind_kph,
						condition.wind_dir,
					)
				);
			})
			.catch(this.handleErrors);
	}

	handleErrors(error: Response) {
		console.log(JSON.stringify(error));

		return Observable.throw(error);
	}
}


/*
https://www.apixu.com/my/
http://api.apixu.com/v1/current.json?key=aa3285e74b824f26bab195813171506&q=50,30
http://api.apixu.com/v1/history.json?key=aa3285e74b824f26bab195813171506&q=50,30&dt=2017-06-15
 */
