import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LicenseAddItemDto } from '../models/license-add-item.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {
  private readonly controllerUrl = `${environment.apiUrl}/licenses`;
  constructor(private httpClient: HttpClient) { }

  createLicense(id: number, license: LicenseAddItemDto): Observable<void> {
    const url = `${this.controllerUrl}/${id}`; 
    return this.httpClient.post<void>(url, license);
  }

}
