import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CarAddItemDto } from '../models/car-add-item-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private readonly controllerUrl = `${environment.apiUrl}/cars`;
  constructor(private httpClient: HttpClient) { }

  createCar(car: CarAddItemDto): Observable<void> {
    return this.httpClient.post<void>(this.controllerUrl, car);
  }
}
