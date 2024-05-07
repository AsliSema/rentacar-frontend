import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ModelListItemDto } from '../models/model-list-item-dto';
import { Observable } from 'rxjs';
import { ModelAddItemDto } from '../models/model-add-item-dto';
import { UpdateModelRequest } from '../models/model-update-request.dto';
import { UpdatedModelResponse } from '../models/model-updated-response.dto';
import { GetModelByIdResponse } from '../models/get-model-by-id-response.dto';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  private readonly controllerUrl = `${environment.apiUrl}/models`;

  constructor(private httpClient: HttpClient) { }

  getModels(): Observable<ModelListItemDto[]>{
    return this.httpClient.get<ModelListItemDto[]>(this.controllerUrl)
  }

  getModelById(id: number): Observable<GetModelByIdResponse>{
    const url = `${this.controllerUrl}/${id}`; 
    return this.httpClient.get<GetModelByIdResponse>(url);
  }

  updateModelById(id: number, request: UpdateModelRequest): Observable<UpdatedModelResponse>{
    const url = `${this.controllerUrl}/${id}`; 
    return this.httpClient.put<UpdatedModelResponse>(url, request);
  }

  createModel(model: ModelAddItemDto): Observable<void> {
    return this.httpClient.post<void>(this.controllerUrl, model);
  }

  deleteModelById(id: number): Observable<void> {
    const url = `${this.controllerUrl}/${id}`; 
    return this.httpClient.delete<void>(url); 
  }


}
