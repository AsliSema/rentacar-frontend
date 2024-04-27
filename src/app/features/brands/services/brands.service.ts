import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { BrandListItemDto } from '../models/brand-list-item-dto';
import { environment } from '../../../../environments/environment';
import { BrandAddItemDto } from '../models/brand-add-item-dto';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  private readonly controllerUrl = `${environment.apiUrl}/brands`;
/*   data = [
      {id:1 , name: "Toyota"},
      {id:2, name:"Chevrolet"},
      {id:3, name: "Tesla"},
      {id:4, name:"Ford"},
      {id:5, name:"BMW"},
      {id:6 , name: "Toyota"},
      {id:7, name:"Chevrolet"},
      {id:8, name: "Tesla"},
      {id:9, name:"Ford"},
      {id:10, name:"BMW"}
    ] */

  constructor(private httpClient: HttpClient) { }

  getBrands(): Observable<BrandListItemDto[]>{
    return this.httpClient.get<BrandListItemDto[]>(this.controllerUrl)
  }

  createBrand(brand: BrandAddItemDto): Observable<void> {
    return this.httpClient.post<void>(this.controllerUrl, brand);
  }

  deleteBrandById(id: number): Observable<void> {
    const url = `${this.controllerUrl}/${id}`; 
    return this.httpClient.delete<void>(url); 
  }


}
