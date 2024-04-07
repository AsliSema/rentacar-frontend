import { Routes } from "@angular/router";
import { ModelPageComponent } from "./model-page.component";

export const modelRoutes: Routes = [
    {
        path: 'models',
        pathMatch: 'full',
        component: ModelPageComponent
    }
];