import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CarAddItemDto } from '../models/car-add-item-dto';
import { Observable } from 'rxjs';
import { CarListItemDto } from '../models/car-list-item-dto';
import { GetCarByIdResponse } from '../models/car-get-by-id-item.dto';
import { UpdateCarRequest } from '../models/car-update-request.dto';
import { UpdateCarResponse, UpdateModelResponse } from '../../../shared/services/api';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private readonly controllerUrl = `${environment.apiUrl}/cars`;
  constructor(private httpClient: HttpClient) { }

  createCar(car: CarAddItemDto): Observable<void> {
    return this.httpClient.post<void>(this.controllerUrl, car);
  }

  getCars(): Observable<CarListItemDto[]>{
    return this.httpClient.get<CarListItemDto[]>(this.controllerUrl)

  }

  getCarById(id: number): Observable<GetCarByIdResponse>{
    const url = `${this.controllerUrl}/${id}`; 
    return this.httpClient.get<GetCarByIdResponse>(url);
  }

  updateCarById(id: number, request: UpdateCarRequest): Observable<UpdateModelResponse>{
    const url =  `${this.controllerUrl}/${id}`; 
    return this.httpClient.put<UpdateCarResponse>(url, request);
  }

  deleteCarById(id: number): Observable<void>{
    const url = `${this.controllerUrl}/${id}`; 
    return this.httpClient.delete<void>(url); 
  }
}
