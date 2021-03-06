import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { CurrentComponent } from "./pages/current/current.component";

import { HttpService } from "./services/http.service";

import { routes, navigatableComponents } from "./app.routing";

@NgModule({
	bootstrap: [
		AppComponent
	],
	imports: [
		NativeScriptModule,
		NativeScriptFormsModule,
		NativeScriptHttpModule,
		NativeScriptRouterModule,
		NativeScriptRouterModule.forRoot(routes)
	],
	declarations: [
		AppComponent,
		CurrentComponent,
		...navigatableComponents
	],
	providers: [
		HttpService
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class AppModule { }
