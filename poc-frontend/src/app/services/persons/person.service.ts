import { Filter } from './../../models/filter.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Person } from 'src/app/models/person.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  apiPersons = environment.APIEndpoint + '/person';

  getTotalElements(): Observable<Array<Person>> {
    return this.http
      .get<Array<Person>>(this.apiPersons);
  }

  getPersons(pageIndex: number, pageSize: number): Observable<Array<Person>> {
    const url = `${this.apiPersons}?_page=${pageIndex}&_limit=${pageSize}`;
    return this.http.get<Array<Person>>(url);
  }

  findPersonsByFilter(pageIndex: number, pageSize: number, filter: Filter): Observable<Array<Person>> {
    let url: string;

    if (filter.filterBy === 'name') {
      url = `${this.apiPersons}?_page=${pageIndex}&_limit=${pageSize}&${filter.filterBy}_like=${filter.valueInput}`;
    }

    if (filter.filterBy === 'gender') {
      url = `${this.apiPersons}?_page=${pageIndex}&_limit=${pageSize}&${filter.filterBy}=${filter.genderInput}`;
    }

    return this.http.get<Array<Person>>(url);
  }
}



