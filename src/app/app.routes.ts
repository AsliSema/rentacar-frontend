import { Routes } from '@angular/router';
import { managementRoutes } from './routes/management-page/management.routes';
import { NotFoundPageComponent } from './routes/not-found-page/not-found-page.component';
import { homeRoutes } from './routes/home-page/home.routes';
import { userRoutes } from './routes/user-page/user.routes';
import { modelsRoutes } from './routes/models-page/models.routes';
import { registerRoutes } from './routes/register-page/register.routes';
import { loginRoutes } from './routes/login-page/login.routes';


export const routes: Routes = [
    ...homeRoutes, 
    ...managementRoutes,
    ...modelsRoutes,
    ...userRoutes, //gereksiz sil sonra!
    ...registerRoutes,
    ...loginRoutes,
    {
        path: '**',
        component: NotFoundPageComponent
    }
];
