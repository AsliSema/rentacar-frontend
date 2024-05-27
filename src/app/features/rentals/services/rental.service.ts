import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { GetRentalsByUserId } from '../models/get-rental-by-user-id.response.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private readonly controllerUrl = `${environment.apiUrl}/rentals`;

  constructor(private httpClient: HttpClient) { }

  getRentalsByUserId(id:number): Observable<GetRentalsByUserId[]>{
    const url = `${this.controllerUrl}/user/${id}`;
    return this.httpClient.get<GetRentalsByUserId[]>(url);
  }
}
