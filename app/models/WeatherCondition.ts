import { Condition } from "./Condition";

export class WeatherCondition {
	constructor(
		public tempC: number,
		public tempF: number,
		public condition: Condition
	) {}
}