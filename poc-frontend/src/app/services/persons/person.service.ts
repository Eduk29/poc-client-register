import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Person } from "src/app/shared/models/person.model"
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

   getPersons(): Observable<Array<any>> {
      return this.http.get("assets/db.json").subscribe(data =>{
      return data
    });
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



