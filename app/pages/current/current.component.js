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
        var _this = this;
        if (!nativescript_geolocation_1.isEnabled()) {
            nativescript_geolocation_1.enableLocationRequest();
            return;
        }
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
    CurrentComponent.prototype.onIndexChanged = function (args) {
        var tabView = args.object;
        console.log("Selected index changed! New inxed: " + tabView.selectedIndex);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjdXJyZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxRUFBZ0c7QUFJaEcsNERBQTBEO0FBUTFELElBQWEsZ0JBQWdCO0lBSzVCLDBCQUFvQixJQUFpQjtRQUFqQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBRnJDLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFFYSxDQUFDO0lBRXpDLG1DQUFRLEdBQVI7UUFBQSxpQkErQkM7UUE5QkEsRUFBRSxDQUFDLENBQUMsQ0FBQyxvQ0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLGdEQUFxQixFQUFFLENBQUM7WUFDeEIsTUFBTSxDQUFDO1FBQ1IsQ0FBQztRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLDZDQUFrQixDQUFDO1lBQ2xCLGVBQWUsRUFBRSxDQUFDO1lBQ2xCLGNBQWMsRUFBRSxFQUFFO1lBQ2xCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLE9BQU8sRUFBRSxLQUFLO1NBQ2QsQ0FBQyxDQUFDLElBQUksQ0FDTixVQUFBLFFBQVE7WUFDUCxLQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FDM0UsVUFBQyxDQUFtQjtnQkFDbkIsS0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLENBQUMsRUFDRCxVQUFBLEtBQUs7Z0JBQ0osS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNiLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLENBQUMsQ0FDRCxDQUFDO1FBQ0gsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNKLEtBQUssQ0FBQyxZQUFVLEtBQUssQ0FBQyxPQUFTLENBQUMsQ0FBQztZQUNqQyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDLENBQ0QsQ0FBQztJQUNILENBQUM7SUFFRCx5Q0FBYyxHQUFkLFVBQWUsSUFBSTtRQUNsQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBaUIsQ0FBQztRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBQ0YsdUJBQUM7QUFBRCxDQUFDLEFBNUNELElBNENDO0FBNUNZLGdCQUFnQjtJQUw1QixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSwyQkFBMkIsQ0FBQztLQUM1RSxDQUFDO3FDQU15QiwwQkFBVztHQUx6QixnQkFBZ0IsQ0E0QzVCO0FBNUNZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgaXNFbmFibGVkLCBlbmFibGVMb2NhdGlvblJlcXVlc3QsIGdldEN1cnJlbnRMb2NhdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcclxuaW1wb3J0IHsgVGFiVmlldywgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIFRhYlZpZXdJdGVtIH0gZnJvbSBcInVpL3RhYi12aWV3XCI7XHJcblxyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2VhdGhlckNvbmRpdGlvbiB9IGZyb20gXCIuLi8uLi9tb2RlbHMvV2VhdGhlckNvbmRpdGlvblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY3VycmVudFwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcInBhZ2VzL2N1cnJlbnQvY3VycmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbXCJwYWdlcy9jdXJyZW50L2N1cnJlbnQtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2N1cnJlbnQvY3VycmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEN1cnJlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHdlYXRoZXI6IFdlYXRoZXJDb25kaXRpb247XHJcblxyXG5cdGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBTZXJ2aWNlKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGlmICghaXNFbmFibGVkKCkpIHtcclxuXHRcdFx0ZW5hYmxlTG9jYXRpb25SZXF1ZXN0KCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcblxyXG5cdFx0Z2V0Q3VycmVudExvY2F0aW9uKHtcclxuXHRcdFx0ZGVzaXJlZEFjY3VyYWN5OiAzLFxyXG5cdFx0XHR1cGRhdGVEaXN0YW5jZTogMTAsXHJcblx0XHRcdG1heGltdW1BZ2U6IDIwMDAwLFxyXG5cdFx0XHR0aW1lb3V0OiAyMDAwMFxyXG5cdFx0fSkudGhlbihcclxuXHRcdFx0bG9jYXRpb24gPT4ge1xyXG5cdFx0XHRcdHRoaXMuaHR0cC5nZXRDdXJyZW50V2VhdGhlcihsb2NhdGlvbi5sYXRpdHVkZSwgbG9jYXRpb24ubG9uZ2l0dWRlKS5zdWJzY3JpYmUoXHJcblx0XHRcdFx0XHQodzogV2VhdGhlckNvbmRpdGlvbikgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLndlYXRoZXIgPSB3O1xyXG5cdFx0XHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGVycm9yID0+IHtcclxuXHRcdFx0XHRcdFx0YWxlcnQoZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGVycm9yID0+IHtcclxuXHRcdFx0XHRhbGVydChgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuXHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0b25JbmRleENoYW5nZWQoYXJncykge1xyXG5cdFx0bGV0IHRhYlZpZXcgPSBhcmdzLm9iamVjdCBhcyBUYWJWaWV3O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgaW5kZXggY2hhbmdlZCEgTmV3IGlueGVkOiBcIiArIHRhYlZpZXcuc2VsZWN0ZWRJbmRleCk7XHJcblx0fVxyXG59XHJcbiJdfQ==