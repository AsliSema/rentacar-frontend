import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { LoginRequest } from '../models/login-request.dto';
import { LoginResponse } from '../models/login-response.dto';
import { Observable } from 'rxjs';
import { UserAddItemDto } from '../../users/models/user-add-item-dto';
import { jwtDecode } from 'jwt-decode';
import { GetUserByEmailRequest } from '../models/get-user-by-email-request.dto';
import { GetUserByEmailResponse } from '../models/get-user-by-email-response.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  //token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoaUBnbWFpbC5jb20iLCJpYXQiOjE3MTY1NTg5NzAsImV4cCI6MTcxNjU1OTg3MH0.TE2kZ9ilSR3_G1mOcVQPBzB3Bh2IELsgpWGbGGJ-E90"

  token = localStorage.getItem('token');
  decodedEmail: string | null = null;
 
  if (token: string) {
    const decodedEmail = jwtDecode(token).sub;
    console.log(decodedEmail)
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

  setUserId(userId: number): void {
    this.userId = userId;
  }

  getUserId(): number | null {
    return this.userId;
  }


  //deneme gelen token ı alıp decode yapıp veri tabanında mail e göre aratıp user a aticam inşaallah

  getUserByEmail(email: string): Observable<GetUserByEmailResponse>{
    const url = `${environment.apiUrl}/users/findByEmail`; 
    return this.httpClient.post<GetUserByEmailResponse>(url, email);
  }





}
