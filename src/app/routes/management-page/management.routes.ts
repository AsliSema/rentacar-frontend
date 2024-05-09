import { Routes } from '@angular/router';
import { ManagementPageComponent } from './management-page.component';
import { authGuard } from '../../shared/guards/auth.guard';
import { ManagementBrandsPageComponent } from './management-brands-page/management-brands-page.component';
import { ManagementCreateBrandPageComponent } from './management-brands-page/management-create-brand-page/management-create-brand-page.component';
import { ManagementEditBrandPageComponent } from './management-brands-page/management-edit-brand-page/management-edit-brand-page.component';
import { ManagementModelsPageComponent } from './management-models-page/management-models-page/management-models-page.component';
import { AddModelFormComponent } from '../../features/models/components/add-model-form/add-model-form.component';
import { UpdateModelFormComponent } from '../../features/models/components/update-model-form/update-model-form.component';
import { ManagementUpdateModelPageComponent } from './management-models-page/management-update-model-page/management-update-model-page.component';
import { AddCarFormComponent } from '../../features/cars/components/add-car-form/add-car-form.component';
import { ManagementCreateCarPageComponent } from './management-car-page/management-create-car-page/management-create-car-page.component';
import { ManagementCarPageComponent } from './management-car-page/management-car-page.component';
import { UpdateCarFormComponent } from '../../features/cars/components/update-car-form/update-car-form.component';
import { ManagementUpdateCarPageComponent } from './management-car-page/management-update-car-page/management-update-car-page.component';

export const managementRoutes: Routes = [
    {
        path: 'management',
        //canActivate: [authGuard], //Angular Guard yapıları ile ilgili route'a giriş yapmadan önce çalışacak yapılar
        data: {
            requiredRoles: ['Admin']
        },
        component: ManagementPageComponent,
        children: [
            {
                path: 'brands',
                component: ManagementBrandsPageComponent
            },
            {
                path: 'brands/create',
                component: ManagementCreateBrandPageComponent
            },
            {
                path: 'brands/edit/:brandId',
                component: ManagementEditBrandPageComponent
            },
            {
                path: "models",
                component: ManagementModelsPageComponent
            },
            {
                path: "models/create",
                component: AddModelFormComponent
            },
            {
                path: "models/update/:modelId",
                component: ManagementUpdateModelPageComponent
            },
            {
                path: "cars",
                component: ManagementCarPageComponent
            },
            {
                path: "cars/create",
                component: ManagementCreateCarPageComponent
            },
            {
                path: "cars/update/:carId",
                component: ManagementUpdateCarPageComponent
            }
        ]
    }
];