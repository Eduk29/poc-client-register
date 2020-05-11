import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Person } from "src/app/models/person.model"
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  apiPersons = environment.APIEndpoint + "/person";


   getPersons(pageSize: number, pageIndex: number): Observable<Array<Person>> {
      const url = `${this.apiPersons}?_page=${pageIndex}&_limit=${pageSize}`
      return this.http.get<Array<Person>>(url);
  }

  getPersonsRaw(): Observable<Array<Person>> {
    return this.http.get<Array<Person>>(this.apiPersons);
  }
}



