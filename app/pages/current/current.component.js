"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_service_1 = require("../../services/http.service");
var CurrentComponent = (function () {
    function CurrentComponent(http) {
        this.http = http;
    }
    CurrentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.getCurrentWeather(50, 30).subscribe(function (w) {
            console.log(JSON.stringify(w));
            _this.weather = w;
        }, function (error) { return alert(error); });
    };
    return CurrentComponent;
}());
CurrentComponent = __decorate([
    core_1.Component({
        selector: "current",
        templateUrl: "pages/current/current.html",
        styleUrls: ["pages/current/current-common.css", "pages/current/current.css"]
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], CurrentComponent);
exports.CurrentComponent = CurrentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjdXJyZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCw0REFBMEQ7QUFTMUQsSUFBYSxnQkFBZ0I7SUFHNUIsMEJBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7SUFBRyxDQUFDO0lBRXpDLG1DQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBBLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDNUMsVUFBQyxDQUFtQjtZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNsQixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQVosQ0FBWSxDQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUNGLHVCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSxnQkFBZ0I7SUFMNUIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsU0FBUyxFQUFFLENBQUMsa0NBQWtDLEVBQUUsMkJBQTJCLENBQUM7S0FDNUUsQ0FBQztxQ0FJeUIsMEJBQVc7R0FIekIsZ0JBQWdCLENBYzVCO0FBZFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFdlYXRoZXJDb25kaXRpb24gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1dlYXRoZXJDb25kaXRpb25cIjtcclxuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSBcIi4uLy4uL21vZGVscy9Db25kaXRpb25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImN1cnJlbnRcIixcclxuXHR0ZW1wbGF0ZVVybDogXCJwYWdlcy9jdXJyZW50L2N1cnJlbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogW1wicGFnZXMvY3VycmVudC9jdXJyZW50LWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9jdXJyZW50L2N1cnJlbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHR3ZWF0aGVyOiBXZWF0aGVyQ29uZGl0aW9uO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBTZXJ2aWNlKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuaHR0cC5nZXRDdXJyZW50V2VhdGhlcig1MCwgMzApLnN1YnNjcmliZShcclxuXHRcdFx0KHc6IFdlYXRoZXJDb25kaXRpb24pID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh3KSk7XHJcblx0XHRcdFx0dGhpcy53ZWF0aGVyID0gdztcclxuXHRcdFx0fSxcclxuXHRcdFx0ZXJyb3IgPT4gYWxlcnQoZXJyb3IpXHJcblx0XHQpO1xyXG5cdH1cclxufSJdfQ==