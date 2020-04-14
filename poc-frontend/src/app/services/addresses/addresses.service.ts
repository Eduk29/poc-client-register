import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Address } from "src/app/models/address.model"
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  apiAddresses = environment.APIEndpoint + "/endereco";


   getAddresses(): Observable<Array<Address>> {
      return this.http.get<Array<Address>>(this.apiAddresses);
  }
}