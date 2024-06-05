import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { LoginRequest } from '../models/login-request.dto';
import { LoginResponse } from '../models/login-response.dto';
import { Observable, catchError, of } from 'rxjs';
import { UserAddItemDto } from '../../users/models/user-add-item-dto';
import { jwtDecode } from 'jwt-decode';
import { GetUserByEmailResponse } from '../models/get-user-by-email-response.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }


  token = localStorage.getItem('token');
  decodedEmail: string | null = null;
  user !: GetUserByEmailResponse;
 
  if (token: string) {
    const decodedEmail = jwtDecode(token).sub;
  } 


  private readonly controllerUrl = `${environment.apiUrl}/auth`

  userId: number | null = null;


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


  getUserByEmail(email: string): Observable<GetUserByEmailResponse>{
    const url = `${environment.apiUrl}/users/findByEmail`; 
    return this.httpClient.post<GetUserByEmailResponse>(url, email);
  }

  getUser(): Observable<GetUserByEmailResponse | null> {
    const decodedEmail = this.decodeToken();
    if (decodedEmail) {
      return this.getUserByEmail(decodedEmail).pipe(
        catchError(error => {
          console.error('Error fetching user:', error);
          // Handle error and return null
          return of(null);
        })
      );
    } else {
      console.log('No valid token found');
      return of(null); 
    }
  }

  decodeToken(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken: { sub: string } = jwtDecode(token);
        return decodedToken.sub;
      } catch (error) {
        console.error('Invalid token:', error);
        return null;
      }
    }
    return null;
  } 


}
