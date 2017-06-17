"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/finally");
var WeatherCondition_1 = require("../models/WeatherCondition");
var Condition_1 = require("../models/Condition");
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.key = "aa3285e74b824f26bab195813171506";
        this.headers = new http_1.Headers({ "Content-Type": "application/json" });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    HttpService.prototype.getCurrentWeather = function (lat, lng) {
        var query = lat + "," + lng;
        var currentUrl = "http://api.apixu.com/v1/current.json?key=" + this.key + "&q=" + query;
        console.log(currentUrl);
        return this.http.get(currentUrl, this.options)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var current = data.current;
            var condition = data.current.condition;
            return new WeatherCondition_1.WeatherCondition(current.temp_c, current.temp_f, new Condition_1.Condition(condition.text, condition.icon, condition.wind_kph, condition.wind_dir));
        })
            .catch(this.handleErrors);
    };
    HttpService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Observable_1.Observable.throw(error);
    };
    return HttpService;
}());
HttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HttpService);
exports.HttpService = HttpService;
/*
https://www.apixu.com/my/
http://api.apixu.com/v1/current.json?key=aa3285e74b824f26bab195813171506&q=50,30
http://api.apixu.com/v1/history.json?key=aa3285e74b824f26bab195813171506&q=50,30&dt=2017-06-15
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RTtBQUV4RSw4Q0FBNkM7QUFDN0MsaUNBQStCO0FBQy9CLG1DQUFpQztBQUNqQyxxQ0FBbUM7QUFDbkMscUNBQW1DO0FBRW5DLCtEQUE4RDtBQUM5RCxpREFBZ0Q7QUFHaEQsSUFBYSxXQUFXO0lBTXZCLHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUw5QixRQUFHLEdBQVcsaUNBQWlDLENBQUM7UUFFeEMsWUFBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUM3RCxZQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBRTdCLENBQUM7SUFFbEMsdUNBQWlCLEdBQWpCLFVBQWtCLEdBQVcsRUFBRSxHQUFXO1FBQ3pDLElBQU0sS0FBSyxHQUFjLEdBQUcsU0FBSSxHQUFLLENBQUM7UUFDdEMsSUFBTSxVQUFVLEdBQVcsOENBQTRDLElBQUksQ0FBQyxHQUFHLFdBQU0sS0FBTyxDQUFDO1FBQzdGLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzVDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDbEMsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNSLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0IsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFFekMsTUFBTSxDQUFDLElBQUksbUNBQWdCLENBQzFCLE9BQU8sQ0FBQyxNQUFNLEVBQ2QsT0FBTyxDQUFDLE1BQU0sRUFDZCxJQUFJLHFCQUFTLENBQ1osU0FBUyxDQUFDLElBQUksRUFDZCxTQUFTLENBQUMsSUFBSSxFQUNkLFNBQVMsQ0FBQyxRQUFRLEVBQ2xCLFNBQVMsQ0FBQyxRQUFRLENBQ2xCLENBQ0QsQ0FBQztRQUNILENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVPLGtDQUFZLEdBQXBCLFVBQXFCLEtBQWU7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFbkMsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDRixrQkFBQztBQUFELENBQUMsQUF0Q0QsSUFzQ0M7QUF0Q1ksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQU9jLFdBQUk7R0FObEIsV0FBVyxDQXNDdkI7QUF0Q1ksa0NBQVc7QUF5Q3hCOzs7O0dBSUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2ZpbmFsbHlcIjtcclxuXHJcbmltcG9ydCB7IFdlYXRoZXJDb25kaXRpb24gfSBmcm9tIFwiLi4vbW9kZWxzL1dlYXRoZXJDb25kaXRpb25cIjtcclxuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSBcIi4uL21vZGVscy9Db25kaXRpb25cIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEh0dHBTZXJ2aWNlIHtcclxuXHRrZXk6IHN0cmluZyA9IFwiYWEzMjg1ZTc0YjgyNGYyNmJhYjE5NTgxMzE3MTUwNlwiO1xyXG5cclxuXHRwcml2YXRlIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwifSk7XHJcblx0cHJpdmF0ZSBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtoZWFkZXJzOiB0aGlzLmhlYWRlcnN9KTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuXHRnZXRDdXJyZW50V2VhdGhlcihsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIpOiBPYnNlcnZhYmxlPFdlYXRoZXJDb25kaXRpb24+IHtcclxuXHRcdGNvbnN0IHF1ZXJ5OiBzdHJpbmcgPSBgJHtsYXR9LCR7bG5nfWA7XHJcblx0XHRjb25zdCBjdXJyZW50VXJsOiBzdHJpbmcgPSBgaHR0cDovL2FwaS5hcGl4dS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke3RoaXMua2V5fSZxPSR7cXVlcnl9YDtcclxuXHRcdGNvbnNvbGUubG9nKGN1cnJlbnRVcmwpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGN1cnJlbnRVcmwsIHRoaXMub3B0aW9ucylcclxuXHRcdFx0Lm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0Lm1hcChkYXRhID0+IHtcclxuXHRcdFx0XHRjb25zdCBjdXJyZW50ID0gZGF0YS5jdXJyZW50O1xyXG5cdFx0XHRcdGNvbnN0IGNvbmRpdGlvbiA9IGRhdGEuY3VycmVudC5jb25kaXRpb247XHJcblxyXG5cdFx0XHRcdHJldHVybiBuZXcgV2VhdGhlckNvbmRpdGlvbihcclxuXHRcdFx0XHRcdGN1cnJlbnQudGVtcF9jLFxyXG5cdFx0XHRcdFx0Y3VycmVudC50ZW1wX2YsXHJcblx0XHRcdFx0XHRuZXcgQ29uZGl0aW9uKFxyXG5cdFx0XHRcdFx0XHRjb25kaXRpb24udGV4dCxcclxuXHRcdFx0XHRcdFx0Y29uZGl0aW9uLmljb24sXHJcblx0XHRcdFx0XHRcdGNvbmRpdGlvbi53aW5kX2twaCxcclxuXHRcdFx0XHRcdFx0Y29uZGl0aW9uLndpbmRfZGlyLFxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuXHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcblxyXG5cdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbi8qXHJcbmh0dHBzOi8vd3d3LmFwaXh1LmNvbS9teS9cclxuaHR0cDovL2FwaS5hcGl4dS5jb20vdjEvY3VycmVudC5qc29uP2tleT1hYTMyODVlNzRiODI0ZjI2YmFiMTk1ODEzMTcxNTA2JnE9NTAsMzBcclxuaHR0cDovL2FwaS5hcGl4dS5jb20vdjEvaGlzdG9yeS5qc29uP2tleT1hYTMyODVlNzRiODI0ZjI2YmFiMTk1ODEzMTcxNTA2JnE9NTAsMzAmZHQ9MjAxNy0wNi0xNVxyXG4gKi9cclxuIl19