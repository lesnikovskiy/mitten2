import { Component, OnInit } from "@angular/core";
import { isEnabled, enableLocationRequest, getCurrentLocation } from "nativescript-geolocation";
import { StackLayout } from "ui/layouts/stack-layout";
import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";
import { getNumber, setNumber } from "application-settings";

import { HttpService } from "../../services/http.service";
import { WeatherCondition } from "../../models/WeatherCondition";
import { locationX, locationY } from "../../models/Constants";

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

		this.getCurrentWeatherCondition();
	}

	onIndexChanged(args) {
		const tabView: TabView = args.object as TabView;
		switch (tabView.selectedIndex) {
			case 0:
				this.getCurrentWeatherCondition();
			default:
				break;
		}
	}

	private getCurrentWeatherCondition(): void {
		this.isLoading = true;

		getCurrentLocation({
			desiredAccuracy: 3,
			updateDistance: 10,
			maximumAge: 20000,
			timeout: 20000
		}).then(
			location => {
				setNumber(locationX, location.latitude);
				setNumber(locationY, location.longitude);

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
				const lat = getNumber(locationX);
				const lng = getNumber(locationY);

				const latValid = lat > -90 || lat <= 90;
				const lngValid = lng > -180 || lng <= 180;

				if (!latValid || !lngValid) {
					alert(error);
					return;
				}

				this.http.getCurrentWeather(lat, lng).subscribe(
					(w: WeatherCondition) => {
						this.weather = w;
						this.isLoading = false;
					},
					e => {
						alert(e);
						this.isLoading = false;
					}
				);
			}
		);
	}
}
