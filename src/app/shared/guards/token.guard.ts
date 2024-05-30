import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../../features/auths/services/token/token.service';
import { inject } from '@angular/core';

export const tokenGuard: CanActivateFn = (route, state) => {


  const tokenService = inject(TokenService);
  const router = inject(Router);

  const token = tokenService.token;


  if (!token) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
