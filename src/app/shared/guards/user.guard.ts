import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../../features/auths/services/token/token.service';
import { AuthService } from '../../features/auths/services/auth.service';
import { inject } from '@angular/core';

export const userGuard: CanActivateFn = (route, state) => {


  const tokenService = inject(TokenService);
  const authService = inject(AuthService);
  const router = inject(Router);

  const role = authService.role;

  if (!((role === "USER") || (role === "ADMIN"))) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
