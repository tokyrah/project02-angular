import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand, Compagn } from '../models/compagn.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CompagnService {

  private compagnsUrl = 'assets/payload-rmp.json';
  private brandsUrl = 'assets/brands.json';

  constructor(private http: HttpClient) {}

  //Get All Compagns data
  getCompagns(): Observable<Compagn[]> {
      return this.http.get<any>(this.compagnsUrl).pipe(
        map(response => response.requests.map((request: any) => {
          return {
            id: request.requestId,
            name: request.campaignName,
            type: request.advice,
            status: request.requestStatus.value,
            brand: request.brand.name,
            dateSubmitted: request.createdDate,
            decisionDate: request.decisionDeadline
          };
        }))
      );
  }

  //Get All Brand data
  getBrands(): Observable<Brand[]> {
    return this.http.get<any>(this.brandsUrl);
  }
}