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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RTtBQUV4RSw4Q0FBNkM7QUFDN0MsaUNBQStCO0FBQy9CLG1DQUFpQztBQUNqQyxxQ0FBbUM7QUFDbkMscUNBQW1DO0FBRW5DLCtEQUE4RDtBQUM5RCxpREFBZ0Q7QUFHaEQsSUFBYSxXQUFXO0lBTXZCLHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUw5QixRQUFHLEdBQVcsaUNBQWlDLENBQUM7UUFFeEMsWUFBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUM3RCxZQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBRTdCLENBQUM7SUFFbEMsdUNBQWlCLEdBQWpCLFVBQWtCLEdBQVcsRUFBRSxHQUFXO1FBQ3pDLElBQU0sS0FBSyxHQUFjLEdBQUcsU0FBSSxHQUFLLENBQUM7UUFDdEMsSUFBTSxVQUFVLEdBQVcsOENBQTRDLElBQUksQ0FBQyxHQUFHLFdBQU0sS0FBTyxDQUFDO1FBQzdGLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzVDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDbEMsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNSLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0IsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFFekMsTUFBTSxDQUFDLElBQUksbUNBQWdCLENBQzFCLE9BQU8sQ0FBQyxNQUFNLEVBQ2QsT0FBTyxDQUFDLE1BQU0sRUFDZCxJQUFJLHFCQUFTLENBQ1osU0FBUyxDQUFDLElBQUksRUFDZCxTQUFTLENBQUMsSUFBSSxFQUNkLFNBQVMsQ0FBQyxRQUFRLEVBQ2xCLFNBQVMsQ0FBQyxRQUFRLENBQ2xCLENBQ0QsQ0FBQztRQUNILENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxLQUFlO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRW5DLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Ysa0JBQUM7QUFBRCxDQUFDLEFBdENELElBc0NDO0FBdENZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtxQ0FPYyxXQUFJO0dBTmxCLFdBQVcsQ0FzQ3ZCO0FBdENZLGtDQUFXO0FBeUN4Qjs7OztHQUlHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvd1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9maW5hbGx5XCI7XHJcblxyXG5pbXBvcnQgeyBXZWF0aGVyQ29uZGl0aW9uIH0gZnJvbSBcIi4uL21vZGVscy9XZWF0aGVyQ29uZGl0aW9uXCI7XHJcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gXCIuLi9tb2RlbHMvQ29uZGl0aW9uXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIdHRwU2VydmljZSB7XHJcblx0a2V5OiBzdHJpbmcgPSBcImFhMzI4NWU3NGI4MjRmMjZiYWIxOTU4MTMxNzE1MDZcIjtcclxuXHJcblx0cHJpdmF0ZSBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn0pO1xyXG5cdHByaXZhdGUgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7aGVhZGVyczogdGhpcy5oZWFkZXJzfSk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cclxuXHJcblx0Z2V0Q3VycmVudFdlYXRoZXIobGF0OiBudW1iZXIsIGxuZzogbnVtYmVyKTogT2JzZXJ2YWJsZTxXZWF0aGVyQ29uZGl0aW9uPiB7XHJcblx0XHRjb25zdCBxdWVyeTogc3RyaW5nID0gYCR7bGF0fSwke2xuZ31gO1xyXG5cdFx0Y29uc3QgY3VycmVudFVybDogc3RyaW5nID0gYGh0dHA6Ly9hcGkuYXBpeHUuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHt0aGlzLmtleX0mcT0ke3F1ZXJ5fWA7XHJcblx0XHRjb25zb2xlLmxvZyhjdXJyZW50VXJsKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChjdXJyZW50VXJsLCB0aGlzLm9wdGlvbnMpXHJcblx0XHRcdC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdC5tYXAoZGF0YSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgY3VycmVudCA9IGRhdGEuY3VycmVudDtcclxuXHRcdFx0XHRjb25zdCBjb25kaXRpb24gPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gbmV3IFdlYXRoZXJDb25kaXRpb24oXHJcblx0XHRcdFx0XHRjdXJyZW50LnRlbXBfYyxcclxuXHRcdFx0XHRcdGN1cnJlbnQudGVtcF9mLFxyXG5cdFx0XHRcdFx0bmV3IENvbmRpdGlvbihcclxuXHRcdFx0XHRcdFx0Y29uZGl0aW9uLnRleHQsXHJcblx0XHRcdFx0XHRcdGNvbmRpdGlvbi5pY29uLFxyXG5cdFx0XHRcdFx0XHRjb25kaXRpb24ud2luZF9rcGgsXHJcblx0XHRcdFx0XHRcdGNvbmRpdGlvbi53aW5kX2RpcixcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xyXG5cdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuXHJcblx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcblx0fVxyXG59XHJcblxyXG5cclxuLypcclxuaHR0cHM6Ly93d3cuYXBpeHUuY29tL215L1xyXG5odHRwOi8vYXBpLmFwaXh1LmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PWFhMzI4NWU3NGI4MjRmMjZiYWIxOTU4MTMxNzE1MDYmcT01MCwzMFxyXG5odHRwOi8vYXBpLmFwaXh1LmNvbS92MS9oaXN0b3J5Lmpzb24/a2V5PWFhMzI4NWU3NGI4MjRmMjZiYWIxOTU4MTMxNzE1MDYmcT01MCwzMCZkdD0yMDE3LTA2LTE1XHJcbiAqL1xyXG4iXX0=