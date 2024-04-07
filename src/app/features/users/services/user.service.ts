import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { UserListItemDto } from '../models/user-list-item-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  private readonly controllerUrl = `${environment.apiUrl}/users`

  getUsers(): Observable<UserListItemDto[]>{
    return this.httpClient.get<UserListItemDto[]>(this.controllerUrl);
  }
  
}
