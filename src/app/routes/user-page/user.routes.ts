import { Routes } from "@angular/router";
import { UserPageComponent } from "./user-page.component";
import { CreateLicenseFormComponent } from "../../features/licences/components/create-license-form/create-license-form/create-license-form.component";
import { UserAddLicensePageComponent } from "./user-add-license-page/user-add-license-page/user-add-license-page.component";
import { UserUpdatePageComponent } from "./user-update-page/user-update-page/user-update-page.component";
import { UserPastRentalsComponent } from "./user-past-rentals/user-past-rentals.component";
import { tokenGuard } from "../../shared/guards/token.guard";
import { userGuard } from "../../shared/guards/user.guard";


export const userRoutes: Routes = [
    {
        path: 'user',
        canActivate: [tokenGuard, userGuard],
        component: UserPageComponent,
        children: [
            {
                path: 'information',
                component: UserUpdatePageComponent
            },
            {
                path: 'license/:user',
                component: UserAddLicensePageComponent
            },
            {
                path: 'rentals/:user',
                component: UserPastRentalsComponent
            }

        ]
    }
];