import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { GetRentalsByUserId } from '../models/get-rental-by-user-id.response.dto';
import { Observable } from 'rxjs';
import { RentalListItemDto } from '../models/rental-list-item.dto';
import { RentalAddItemDto } from '../models/rental-add-item.dto';
import { GetRentalByIdDto } from '../models/get-rental-by-id.dto';
import { RentalUpdateRequestDto } from '../models/rental-update-request.dto';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private readonly controllerUrl = `${environment.apiUrl}/rentals`;

  constructor(private httpClient: HttpClient) { }


  createRental(rental: RentalAddItemDto): Observable<void> {
    return this.httpClient.post<void>(this.controllerUrl, rental);
  }

  getRentals(): Observable<RentalListItemDto[]>{
    return this.httpClient.get<RentalListItemDto[]>(this.controllerUrl);
  }

  getRentalById(id: number): Observable<GetRentalByIdDto>{
    const url = `${this.controllerUrl}/${id}`; 
    return this.httpClient.get<GetRentalByIdDto>(url);
  }

  updateRentalById(id: number, request: RentalUpdateRequestDto): Observable<void>{
    const url = `${this.controllerUrl}/${id}`; 
    return this.httpClient.put<void>(url, request);
  }

  getRentalsByUserId(id:number): Observable<GetRentalsByUserId[]>{
    const url = `${this.controllerUrl}/user/${id}`;
    return this.httpClient.get<GetRentalsByUserId[]>(url);
  }
}
