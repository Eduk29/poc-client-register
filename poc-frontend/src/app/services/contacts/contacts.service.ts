import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Contact } from "src/app/models/contact.model"
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  apiContacts = environment.APIEndpoint + "/contact";


   getDocuments(): Observable<Array<Contact>> {
      return this.http.get<Array<Contact>>(this.apiContacts);
  }
}