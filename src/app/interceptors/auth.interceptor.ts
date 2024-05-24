import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../features/auths/services/auth.service';
import { TokenService } from '../features/auths/services/token/token.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const tokenService = inject(TokenService);

  console.log('AuthInterceptor');
  if(tokenService.token){
    let newRequest = req.clone({ setHeaders: { Authorization: 'Bearer ' +  tokenService.token }});

    return next(newRequest);
  }

  return next(req)


};
