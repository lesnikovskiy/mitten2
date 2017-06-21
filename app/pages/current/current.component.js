"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var application_settings_1 = require("application-settings");
var http_service_1 = require("../../services/http.service");
var Constants_1 = require("../../models/Constants");
var CurrentComponent = (function () {
    function CurrentComponent(http) {
        this.http = http;
        this.isLoading = false;
    }
    CurrentComponent.prototype.ngOnInit = function () {
        if (!nativescript_geolocation_1.isEnabled()) {
            nativescript_geolocation_1.enableLocationRequest();
            return;
        }
        this.getCurrentWeatherCondition();
    };
    CurrentComponent.prototype.onIndexChanged = function (args) {
        var tabView = args.object;
        switch (tabView.selectedIndex) {
            case 0:
                this.getCurrentWeatherCondition();
            default:
                break;
        }
    };
    CurrentComponent.prototype.getCurrentWeatherCondition = function () {
        var _this = this;
        this.isLoading = true;
        nativescript_geolocation_1.getCurrentLocation({
            desiredAccuracy: 3,
            updateDistance: 10,
            maximumAge: 20000,
            timeout: 20000
        }).then(function (location) {
            application_settings_1.setNumber(Constants_1.locationX, location.latitude);
            application_settings_1.setNumber(Constants_1.locationY, location.longitude);
            _this.http.getCurrentWeather(location.latitude, location.longitude).subscribe(function (w) {
                _this.weather = w;
                _this.isLoading = false;
            }, function (error) {
                alert(error);
                _this.isLoading = false;
            });
        }, function (error) {
            var lat = application_settings_1.getNumber(Constants_1.locationX);
            var lng = application_settings_1.getNumber(Constants_1.locationY);
            var latValid = lat > -90 || lat <= 90;
            var lngValid = lng > -180 || lng <= 180;
            if (!latValid || !lngValid) {
                alert(error);
                return;
            }
            _this.http.getCurrentWeather(lat, lng).subscribe(function (w) {
                _this.weather = w;
                _this.isLoading = false;
            }, function (e) {
                alert(e);
                _this.isLoading = false;
            });
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjdXJyZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxRUFBZ0c7QUFHaEcsNkRBQTREO0FBRTVELDREQUEwRDtBQUUxRCxvREFBOEQ7QUFPOUQsSUFBYSxnQkFBZ0I7SUFLNUIsMEJBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7UUFGckMsY0FBUyxHQUFZLEtBQUssQ0FBQztJQUVhLENBQUM7SUFFekMsbUNBQVEsR0FBUjtRQUNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsb0NBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsQixnREFBcUIsRUFBRSxDQUFDO1lBQ3hCLE1BQU0sQ0FBQztRQUNSLENBQUM7UUFFRCxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQseUNBQWMsR0FBZCxVQUFlLElBQUk7UUFDbEIsSUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLE1BQWlCLENBQUM7UUFDaEQsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDL0IsS0FBSyxDQUFDO2dCQUNMLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1lBQ25DO2dCQUNDLEtBQUssQ0FBQztRQUNSLENBQUM7SUFDRixDQUFDO0lBRU8scURBQTBCLEdBQWxDO1FBQUEsaUJBZ0RDO1FBL0NBLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLDZDQUFrQixDQUFDO1lBQ2xCLGVBQWUsRUFBRSxDQUFDO1lBQ2xCLGNBQWMsRUFBRSxFQUFFO1lBQ2xCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLE9BQU8sRUFBRSxLQUFLO1NBQ2QsQ0FBQyxDQUFDLElBQUksQ0FDTixVQUFBLFFBQVE7WUFDUCxnQ0FBUyxDQUFDLHFCQUFTLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hDLGdDQUFTLENBQUMscUJBQVMsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFekMsS0FBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQzNFLFVBQUMsQ0FBbUI7Z0JBQ25CLEtBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN4QixDQUFDLEVBQ0QsVUFBQSxLQUFLO2dCQUNKLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDYixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN4QixDQUFDLENBQ0QsQ0FBQztRQUNILENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSixJQUFNLEdBQUcsR0FBRyxnQ0FBUyxDQUFDLHFCQUFTLENBQUMsQ0FBQztZQUNqQyxJQUFNLEdBQUcsR0FBRyxnQ0FBUyxDQUFDLHFCQUFTLENBQUMsQ0FBQztZQUVqQyxJQUFNLFFBQVEsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQztZQUN4QyxJQUFNLFFBQVEsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQztZQUUxQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDYixNQUFNLENBQUM7WUFDUixDQUFDO1lBRUQsS0FBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUM5QyxVQUFDLENBQW1CO2dCQUNuQixLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDakIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDeEIsQ0FBQyxFQUNELFVBQUEsQ0FBQztnQkFDQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDeEIsQ0FBQyxDQUNELENBQUM7UUFDSCxDQUFDLENBQ0QsQ0FBQztJQUNILENBQUM7SUFDRix1QkFBQztBQUFELENBQUMsQUEzRUQsSUEyRUM7QUEzRVksZ0JBQWdCO0lBTDVCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxFQUFFLDJCQUEyQixDQUFDO0tBQzVFLENBQUM7cUNBTXlCLDBCQUFXO0dBTHpCLGdCQUFnQixDQTJFNUI7QUEzRVksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBpc0VuYWJsZWQsIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCwgZ2V0Q3VycmVudExvY2F0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xyXG5pbXBvcnQgeyBUYWJWaWV3LCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSwgVGFiVmlld0l0ZW0gfSBmcm9tIFwidWkvdGFiLXZpZXdcIjtcclxuaW1wb3J0IHsgZ2V0TnVtYmVyLCBzZXROdW1iZXIgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBXZWF0aGVyQ29uZGl0aW9uIH0gZnJvbSBcIi4uLy4uL21vZGVscy9XZWF0aGVyQ29uZGl0aW9uXCI7XHJcbmltcG9ydCB7IGxvY2F0aW9uWCwgbG9jYXRpb25ZIH0gZnJvbSBcIi4uLy4uL21vZGVscy9Db25zdGFudHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImN1cnJlbnRcIixcclxuXHR0ZW1wbGF0ZVVybDogXCJwYWdlcy9jdXJyZW50L2N1cnJlbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogW1wicGFnZXMvY3VycmVudC9jdXJyZW50LWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9jdXJyZW50L2N1cnJlbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHR3ZWF0aGVyOiBXZWF0aGVyQ29uZGl0aW9uO1xyXG5cclxuXHRpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwU2VydmljZSkge31cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRpZiAoIWlzRW5hYmxlZCgpKSB7XHJcblx0XHRcdGVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5nZXRDdXJyZW50V2VhdGhlckNvbmRpdGlvbigpO1xyXG5cdH1cclxuXHJcblx0b25JbmRleENoYW5nZWQoYXJncykge1xyXG5cdFx0Y29uc3QgdGFiVmlldzogVGFiVmlldyA9IGFyZ3Mub2JqZWN0IGFzIFRhYlZpZXc7XHJcblx0XHRzd2l0Y2ggKHRhYlZpZXcuc2VsZWN0ZWRJbmRleCkge1xyXG5cdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0dGhpcy5nZXRDdXJyZW50V2VhdGhlckNvbmRpdGlvbigpO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXRDdXJyZW50V2VhdGhlckNvbmRpdGlvbigpOiB2b2lkIHtcclxuXHRcdHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuXHJcblx0XHRnZXRDdXJyZW50TG9jYXRpb24oe1xyXG5cdFx0XHRkZXNpcmVkQWNjdXJhY3k6IDMsXHJcblx0XHRcdHVwZGF0ZURpc3RhbmNlOiAxMCxcclxuXHRcdFx0bWF4aW11bUFnZTogMjAwMDAsXHJcblx0XHRcdHRpbWVvdXQ6IDIwMDAwXHJcblx0XHR9KS50aGVuKFxyXG5cdFx0XHRsb2NhdGlvbiA9PiB7XHJcblx0XHRcdFx0c2V0TnVtYmVyKGxvY2F0aW9uWCwgbG9jYXRpb24ubGF0aXR1ZGUpO1xyXG5cdFx0XHRcdHNldE51bWJlcihsb2NhdGlvblksIGxvY2F0aW9uLmxvbmdpdHVkZSk7XHJcblxyXG5cdFx0XHRcdHRoaXMuaHR0cC5nZXRDdXJyZW50V2VhdGhlcihsb2NhdGlvbi5sYXRpdHVkZSwgbG9jYXRpb24ubG9uZ2l0dWRlKS5zdWJzY3JpYmUoXHJcblx0XHRcdFx0XHQodzogV2VhdGhlckNvbmRpdGlvbikgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLndlYXRoZXIgPSB3O1xyXG5cdFx0XHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGVycm9yID0+IHtcclxuXHRcdFx0XHRcdFx0YWxlcnQoZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGVycm9yID0+IHtcclxuXHRcdFx0XHRjb25zdCBsYXQgPSBnZXROdW1iZXIobG9jYXRpb25YKTtcclxuXHRcdFx0XHRjb25zdCBsbmcgPSBnZXROdW1iZXIobG9jYXRpb25ZKTtcclxuXHJcblx0XHRcdFx0Y29uc3QgbGF0VmFsaWQgPSBsYXQgPiAtOTAgfHwgbGF0IDw9IDkwO1xyXG5cdFx0XHRcdGNvbnN0IGxuZ1ZhbGlkID0gbG5nID4gLTE4MCB8fCBsbmcgPD0gMTgwO1xyXG5cclxuXHRcdFx0XHRpZiAoIWxhdFZhbGlkIHx8ICFsbmdWYWxpZCkge1xyXG5cdFx0XHRcdFx0YWxlcnQoZXJyb3IpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy5odHRwLmdldEN1cnJlbnRXZWF0aGVyKGxhdCwgbG5nKS5zdWJzY3JpYmUoXHJcblx0XHRcdFx0XHQodzogV2VhdGhlckNvbmRpdGlvbikgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLndlYXRoZXIgPSB3O1xyXG5cdFx0XHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGUgPT4ge1xyXG5cdFx0XHRcdFx0XHRhbGVydChlKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iXX0=