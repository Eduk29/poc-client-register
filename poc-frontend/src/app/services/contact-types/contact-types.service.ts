import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ContactType } from "src/app/models/contact-type.model"
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContactTypeService {

  constructor(private http: HttpClient) { }

  apiContactTypes = environment.APIEndpoint + "/contactType";


   getDocuments(): Observable<Array<ContactType>> {
      return this.http.get<Array<ContactType>>(this.apiContactTypes);
  }
}