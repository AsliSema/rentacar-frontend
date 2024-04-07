import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ModelListItemDto } from '../models/model-list-item-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  private readonly controllerUrl = `${environment.apiUrl}/models`;

  constructor(private httpClient: HttpClient) { }

  getModels(): Observable<ModelListItemDto[]>{
    return this.httpClient.get<ModelListItemDto[]>(this.controllerUrl)
  }
}
