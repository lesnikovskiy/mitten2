import { Condition } from "./Condition";

export class WeatherCondition {
	constructor(
		public lastUpdated: Date,
		public tempC: number,
		public tempF: number,
		public windKph: number,
		public windDirection: string,
		public pressure: number,
		public humidity: number,
		public feelsLikeC: number,
		public feelsLikeF: number,
		public condition: Condition
	) {}
}
