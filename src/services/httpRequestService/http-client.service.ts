import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) {

   }

   submitInsuranceForm(insuranceForm: any): Observable<any> {
    return this.httpClient.post(
      environment.backendRootUrl + environment.backendInsuranceFormUri, 
      insuranceForm, 
      { headers: this.getInsuranceFormHeaders(),
        observe: 'response' 
      }
        );
  }

  getInsuranceFormHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST,GET,PUT,OPTIONS',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Origin, User-Agent'
    });
  }
}
