import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { UserListItemDto } from '../models/user-list-item-dto';
import { UserAddItemDto } from '../models/user-add-item-dto';
import { GetUserByIdResponse } from '../models/get-user-by-id-response-dto';
import { UpdateUserRequest } from '../models/user-update-request.dto';
import { UpdatedUserResponse } from '../models/user-updated-response.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  private readonly controllerUrl = `${environment.apiUrl}/users`

  getUsers(): Observable<UserListItemDto[]>{
    return this.httpClient.get<UserListItemDto[]>(this.controllerUrl);
  }

  createUser(user: UserAddItemDto): Observable<void> {
    return this.httpClient.post<void>(this.controllerUrl, user);
  }

  getUserById(id: number): Observable<GetUserByIdResponse>{
    const url = `${this.controllerUrl}/${id}`; 
    return this.httpClient.get<GetUserByIdResponse>(url);
  }

  updateUserById(id: number, request: UpdateUserRequest): Observable<UpdatedUserResponse>{
    const url = `${this.controllerUrl}/${id}`; 
    return this.httpClient.put<UpdatedUserResponse>(url, request);
  }

  deleteUserById(id: number): Observable<void> {
    const url = `${this.controllerUrl}/${id}`; 
    return this.httpClient.delete<void>(url); 
  }
  
}
