"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var app_component_1 = require("./app.component");
var current_component_1 = require("./pages/current/current.component");
var http_service_1 = require("./services/http.service");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)
        ],
        declarations: [
            app_component_1.AppComponent,
            current_component_1.CurrentComponent
        ].concat(app_routing_1.navigatableComponents),
        providers: [
            http_service_1.HttpService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSxrREFBbUU7QUFDbkUsc0RBQXVFO0FBRXZFLGlEQUErQztBQUMvQyx1RUFBcUU7QUFFckUsd0RBQXNEO0FBRXRELDZDQUE4RDtBQXlCOUQsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBdkJyQixlQUFRLENBQUM7UUFDVCxTQUFTLEVBQUU7WUFDViw0QkFBWTtTQUNaO1FBQ0QsT0FBTyxFQUFFO1lBQ1Isd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qiw2QkFBc0I7WUFDdEIsaUNBQXdCO1lBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxvQkFBTSxDQUFDO1NBQ3hDO1FBQ0QsWUFBWTtZQUNYLDRCQUFZO1lBQ1osb0NBQWdCO2lCQUNiLG1DQUFxQixDQUN4QjtRQUNELFNBQVMsRUFBRTtZQUNWLDBCQUFXO1NBQ1g7UUFDRCxPQUFPLEVBQUU7WUFDUix1QkFBZ0I7U0FDaEI7S0FDRCxDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEN1cnJlbnRDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9jdXJyZW50L2N1cnJlbnQuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2h0dHAuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgcm91dGVzLCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRib290c3RyYXA6IFtcclxuXHRcdEFwcENvbXBvbmVudFxyXG5cdF0sXHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmF0aXZlU2NyaXB0TW9kdWxlLFxyXG5cdFx0TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcblx0XHROYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxyXG5cdFx0TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxyXG5cdFx0TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRBcHBDb21wb25lbnQsXHJcblx0XHRDdXJyZW50Q29tcG9uZW50LFxyXG5cdFx0Li4ubmF2aWdhdGFibGVDb21wb25lbnRzXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdEh0dHBTZXJ2aWNlXHJcblx0XSxcclxuXHRzY2hlbWFzOiBbXHJcblx0XHROT19FUlJPUlNfU0NIRU1BXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=