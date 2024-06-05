import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { TokenService } from '../../features/auths/services/token/token.service';
import { AuthService } from '../../features/auths/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  const role = authService.role;


  if (!(role === "ADMIN")) {
    router.navigate(['/login']);
    return false;
  }


  return true;
};
