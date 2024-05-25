import { Routes } from "@angular/router";
import { CarsPageComponent } from "./cars-page.component";
import { CarsListPageComponent } from "./cars-list-page/cars-list-page.component";

export const carsRoutes: Routes = [
    {
        path: 'cars',
        //pathMatch: 'full',
        component: CarsPageComponent,
        children: [
            {
                path: "",
                component: CarsListPageComponent
            },
        ]
    }
];