import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Person } from "src/app/models/person.model"
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  jsonURL = "https://my-json-server.typicode.com/Eduk29/poc-client-register/pessoa";


   getPersons() {
      return this.http.get(this.jsonURL);
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



