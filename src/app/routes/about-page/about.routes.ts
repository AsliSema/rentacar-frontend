import { Routes } from "@angular/router";
import { AboutPageComponent } from "./about-page.component";

export const aboutRoutes: Routes = [
    {
        path: 'about',
        //pathMatch: 'full',
        component: AboutPageComponent
    }
];