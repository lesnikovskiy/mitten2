import { Routes } from "@angular/router";
import { CurrentComponent } from "./pages/current/current.component";

export const routes: Routes = [
	{ path: "", redirectTo: "/current", pathMatch: "full" },
	{ path: "current", component: CurrentComponent }
];

export const navigatableComponents = [
	CurrentComponent
];
