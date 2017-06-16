import { Component, OnInit } from "@angular/core";

import { HttpService } from "../../services/http.service";
import { WeatherCondition } from "../../models/WeatherCondition";
import { Condition } from "../../models/Condition";

@Component({
	selector: "current",
	templateUrl: "pages/current/current.html",
	styleUrls: ["pages/current/current-common.css", "pages/current/current.css"]
})
export class CurrentComponent implements OnInit {
	weather: WeatherCondition;

	constructor(private http: HttpService) {}

	ngOnInit() {
		this.http.getCurrentWeather(50, 30).subscribe(
			(w: WeatherCondition) => {
				console.log(JSON.stringify(w));
				this.weather = w;
			},
			error => alert(error)
		);
	}
}