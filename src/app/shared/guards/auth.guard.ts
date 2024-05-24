import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { TokenService } from '../../features/auths/services/token/token.service';
import { AuthService } from '../../features/auths/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  //if (!localStorage.getItem('token')) return false;

  //const token = localStorage.getItem('token');
  // if (token.expire < Date.now())
  //   return false;


  const tokenService = inject(TokenService);
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = tokenService.token;
  const role = authService.role;


  if (!token && !(role === "ADMIN")) {
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
