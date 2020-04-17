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


   getPersons(): Observable<Array<Person>> {
      return this.http.get<Array<Person>>(this.apiPersons);
  }

  // findPersons(): Observable<Person[]> {
  //   return of(this.tenPersons());
  // }

  // tenPersons(): Person[] {
  //   return this.mockPersons(10);
  // }

  // mockPersons(amount: number): Person[] {
  //   this.getPersons();
  //   let persons = this.data;
  //   for (let i = 0; i < amount; i++) {
  //     persons.push();
  //   }
  //   return persons;
  // }
}



