import { Injectable } from '@angular/core';
import { TransmissionListItemDto } from '../models/transmission-list-item.dto';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransmissionsService {

  private readonly controllerUrl = `${environment.apiUrl}/transmission`;
  
  constructor(private httpClient: HttpClient) { }

  getTransmissions(): Observable<TransmissionListItemDto[]>{
    return this.httpClient.get<TransmissionListItemDto[]>(this.controllerUrl)
  }
}
