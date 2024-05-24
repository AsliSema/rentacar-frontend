import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { LoginRequest } from '../models/login-request.dto';
import { LoginResponse } from '../models/login-response.dto';
import { Observable } from 'rxjs';
import { UserAddItemDto } from '../../users/models/user-add-item-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  private readonly controllerUrl = `${environment.apiUrl}/auth`


  loginUser(request: LoginRequest): Observable<LoginResponse>{
    const url = `${this.controllerUrl}/login`; 
    return this.httpClient.post<LoginResponse>(url, request);
  }

  registerUser(user: UserAddItemDto): Observable<void> {
    const url = `${this.controllerUrl}/register`; 
    return this.httpClient.post<void>(url, user);
  }


  set role(role: string){
    localStorage.setItem('role', role);
  }

  get role(){
    return localStorage.getItem('role') as string;
  }

}
