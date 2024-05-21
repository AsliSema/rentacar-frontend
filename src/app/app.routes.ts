import { Routes } from '@angular/router';
import { managementRoutes } from './routes/management-page/management.routes';
import { NotFoundPageComponent } from './routes/not-found-page/not-found-page.component';
import { homeRoutes } from './routes/home-page/home.routes';
import { userRoutes } from './routes/user-page/user.routes';
import { modelsRoutes } from './routes/models-page/models.routes';


export const routes: Routes = [
    ...homeRoutes, 
    ...managementRoutes,
    ...modelsRoutes,
    ...userRoutes,
    {
        path: '**',
        component: NotFoundPageComponent
    }
];
