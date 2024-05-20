import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { FuelListItemDto } from '../models/fuel-list-item.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuelsService {

  private readonly controllerUrl = `${environment.apiUrl}/fuels`;
  
  constructor(private httpClient: HttpClient) { }

  getFuels(): Observable<FuelListItemDto[]>{
    return this.httpClient.get<FuelListItemDto[]>(this.controllerUrl)
  }


}
