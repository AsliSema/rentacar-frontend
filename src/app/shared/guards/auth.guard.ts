import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { TokenService } from '../../features/auths/services/token/token.service';

export const authGuard: CanActivateFn = (route, state) => {

  //if (!localStorage.getItem('token')) return false;

  //const token = localStorage.getItem('token');
  // if (token.expire < Date.now())
  //   return false;


  const tokenService = inject(TokenService);
  const router = inject(Router);

  const token = tokenService.token;

  if (!token ) {
    router.navigate(['/login']);
    return false;
  }

  const requiredRoles = route.data['requiredRoles'];
  // if (!token.roles.some((role) => requiredRoles.includes(role))) {
  //   // toastService.show('You do not have enough permissions to access this page.', { type: 'error' });
  //   return false;
  // }

  return true;
};
