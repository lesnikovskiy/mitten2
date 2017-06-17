import { Component, OnInit } from "@angular/core";
import { isEnabled, enableLocationRequest, getCurrentLocation } from "nativescript-geolocation";
import { StackLayout } from "ui/layouts/stack-layout";
import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";

import { HttpService } from "../../services/http.service";
import { WeatherCondition } from "../../models/WeatherCondition";

@Component({
	selector: "current",
	templateUrl: "pages/current/current.html",
	styleUrls: ["pages/current/current-common.css", "pages/current/current.css"]
})
export class CurrentComponent implements OnInit {
	weather: WeatherCondition;

	isLoading: boolean = false;

	constructor(private http: HttpService) {}

	ngOnInit() {
		if (!isEnabled()) {
			enableLocationRequest();
			return;
		}

		this.isLoading = true;

		getCurrentLocation({
			desiredAccuracy: 3,
			updateDistance: 10,
			maximumAge: 20000,
			timeout: 20000
		}).then(
			location => {
				this.http.getCurrentWeather(location.latitude, location.longitude).subscribe(
					(w: WeatherCondition) => {
						this.weather = w;
						this.isLoading = false;
					},
					error => {
						alert(error);
						this.isLoading = false;
					}
				);
			},
			error => {
				alert(`Error: ${error.message}`);
				this.isLoading = false;
			}
		);
	}

	onIndexChanged(args) {
		let tabView = args.object as TabView;
        console.log("Selected index changed! New inxed: " + tabView.selectedIndex);
	}
}
