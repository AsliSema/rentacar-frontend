import { Routes } from '@angular/router';
import { managementRoutes } from './routes/management-page/management.routes';
import { NotFoundPageComponent } from './routes/not-found-page/not-found-page.component';
import { homeRoutes } from './routes/home-page/home.routes';
import { userRoutes } from './routes/user-page/user.routes';
import { registerRoutes } from './routes/register-page/register.routes';
import { loginRoutes } from './routes/login-page/login.routes';
import { carsRoutes } from './routes/cars-page/cars.routes';
import { aboutRoutes } from './routes/about-page/about.routes';


export const routes: Routes = [
    ...homeRoutes, 
    ...managementRoutes,
    ...carsRoutes,
    ...userRoutes, 
    ...registerRoutes,
    ...loginRoutes,
    ...aboutRoutes,
    {
        path: '**',
        component: NotFoundPageComponent
    }
];
