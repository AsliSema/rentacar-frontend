import { Routes } from '@angular/router';
import { ManagementPageComponent } from './management-page.component';
import { authGuard } from '../../shared/guards/auth.guard';
import { ManagementBrandsPageComponent } from './management-brands-page/management-brands-page.component';

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
            }
        ]
    }
];