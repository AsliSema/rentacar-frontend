import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  if (!localStorage.getItem('token')) return false;

  const token = localStorage.getItem('token');
  // if (token.expire < Date.now())
  //   return false;

  const requiredRoles = route.data['requiredRoles'];
  // if (!token.roles.some((role) => requiredRoles.includes(role))) {
  //   // toastService.show('You do not have enough permissions to access this page.', { type: 'error' });
  //   return false;
  // }

  return true;
};
