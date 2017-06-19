"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var http_service_1 = require("../../services/http.service");
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
            _this.http.getCurrentWeather(location.latitude, location.longitude).subscribe(function (w) {
                _this.weather = w;
                _this.isLoading = false;
            }, function (error) {
                alert(error);
                _this.isLoading = false;
            });
        }, function (error) {
            alert("Error: " + error.message);
            _this.isLoading = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjdXJyZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxRUFBZ0c7QUFJaEcsNERBQTBEO0FBUTFELElBQWEsZ0JBQWdCO0lBSzVCLDBCQUFvQixJQUFpQjtRQUFqQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBRnJDLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFFYSxDQUFDO0lBRXpDLG1DQUFRLEdBQVI7UUFDQyxFQUFFLENBQUMsQ0FBQyxDQUFDLG9DQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsZ0RBQXFCLEVBQUUsQ0FBQztZQUN4QixNQUFNLENBQUM7UUFDUixDQUFDO1FBRUQsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELHlDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2xCLElBQUksT0FBTyxHQUFZLElBQUksQ0FBQyxNQUFpQixDQUFDO1FBQzlDLE1BQU0sQ0FBQSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQzlCLEtBQUssQ0FBQztnQkFDTCxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztZQUNuQztnQkFDQyxLQUFLLENBQUM7UUFDUixDQUFDO0lBQ0YsQ0FBQztJQUVPLHFEQUEwQixHQUFsQztRQUFBLGlCQTBCQztRQXpCQSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0Qiw2Q0FBa0IsQ0FBQztZQUNsQixlQUFlLEVBQUUsQ0FBQztZQUNsQixjQUFjLEVBQUUsRUFBRTtZQUNsQixVQUFVLEVBQUUsS0FBSztZQUNqQixPQUFPLEVBQUUsS0FBSztTQUNkLENBQUMsQ0FBQyxJQUFJLENBQ04sVUFBQSxRQUFRO1lBQ1AsS0FBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQzNFLFVBQUMsQ0FBbUI7Z0JBQ25CLEtBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN4QixDQUFDLEVBQ0QsVUFBQSxLQUFLO2dCQUNKLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDYixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN4QixDQUFDLENBQ0QsQ0FBQztRQUNILENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSixLQUFLLENBQUMsWUFBVSxLQUFLLENBQUMsT0FBUyxDQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDO0lBQ0YsdUJBQUM7QUFBRCxDQUFDLEFBckRELElBcURDO0FBckRZLGdCQUFnQjtJQUw1QixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSwyQkFBMkIsQ0FBQztLQUM1RSxDQUFDO3FDQU15QiwwQkFBVztHQUx6QixnQkFBZ0IsQ0FxRDVCO0FBckRZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgaXNFbmFibGVkLCBlbmFibGVMb2NhdGlvblJlcXVlc3QsIGdldEN1cnJlbnRMb2NhdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcclxuaW1wb3J0IHsgVGFiVmlldywgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIFRhYlZpZXdJdGVtIH0gZnJvbSBcInVpL3RhYi12aWV3XCI7XHJcblxyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2VhdGhlckNvbmRpdGlvbiB9IGZyb20gXCIuLi8uLi9tb2RlbHMvV2VhdGhlckNvbmRpdGlvblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY3VycmVudFwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcInBhZ2VzL2N1cnJlbnQvY3VycmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbXCJwYWdlcy9jdXJyZW50L2N1cnJlbnQtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2N1cnJlbnQvY3VycmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEN1cnJlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHdlYXRoZXI6IFdlYXRoZXJDb25kaXRpb247XHJcblxyXG5cdGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBTZXJ2aWNlKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGlmICghaXNFbmFibGVkKCkpIHtcclxuXHRcdFx0ZW5hYmxlTG9jYXRpb25SZXF1ZXN0KCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmdldEN1cnJlbnRXZWF0aGVyQ29uZGl0aW9uKCk7XHJcblx0fVxyXG5cclxuXHRvbkluZGV4Q2hhbmdlZChhcmdzKSB7XHJcblx0XHRsZXQgdGFiVmlldzogVGFiVmlldyA9IGFyZ3Mub2JqZWN0IGFzIFRhYlZpZXc7XHJcblx0XHRzd2l0Y2godGFiVmlldy5zZWxlY3RlZEluZGV4KSB7XHJcblx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHR0aGlzLmdldEN1cnJlbnRXZWF0aGVyQ29uZGl0aW9uKCk7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldEN1cnJlbnRXZWF0aGVyQ29uZGl0aW9uKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG5cclxuXHRcdGdldEN1cnJlbnRMb2NhdGlvbih7XHJcblx0XHRcdGRlc2lyZWRBY2N1cmFjeTogMyxcclxuXHRcdFx0dXBkYXRlRGlzdGFuY2U6IDEwLFxyXG5cdFx0XHRtYXhpbXVtQWdlOiAyMDAwMCxcclxuXHRcdFx0dGltZW91dDogMjAwMDBcclxuXHRcdH0pLnRoZW4oXHJcblx0XHRcdGxvY2F0aW9uID0+IHtcclxuXHRcdFx0XHR0aGlzLmh0dHAuZ2V0Q3VycmVudFdlYXRoZXIobG9jYXRpb24ubGF0aXR1ZGUsIGxvY2F0aW9uLmxvbmdpdHVkZSkuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdFx0KHc6IFdlYXRoZXJDb25kaXRpb24pID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy53ZWF0aGVyID0gdztcclxuXHRcdFx0XHRcdFx0dGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRlcnJvciA9PiB7XHJcblx0XHRcdFx0XHRcdGFsZXJ0KGVycm9yKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRlcnJvciA9PiB7XHJcblx0XHRcdFx0YWxlcnQoYEVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcblx0XHRcdFx0dGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIl19