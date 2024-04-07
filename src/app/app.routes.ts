import { Routes } from '@angular/router';
import { managementRoutes } from './routes/management-page/management.routes';
import { NotFoundPageComponent } from './routes/not-found-page/not-found-page.component';
import { homeRoutes } from './routes/home-page/home.routes';
import { modelRoutes } from './routes/model-page/model.routes';


export const routes: Routes = [
    ...homeRoutes, 
    ...managementRoutes,
    ...modelRoutes,
    {
        path: '**',
        component: NotFoundPageComponent
    }
];
