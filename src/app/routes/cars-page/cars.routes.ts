import { Routes } from "@angular/router";
import { CarsPageComponent } from "./cars-page.component";
import { CarsListPageComponent } from "./cars-list-page/cars-list-page.component";
import { CarDetailPageComponent } from "./car-detail-page/car-detail-page.component";

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
            {
                path: "carId/:id",
                component: CarDetailPageComponent
            },
        ]
    }
];