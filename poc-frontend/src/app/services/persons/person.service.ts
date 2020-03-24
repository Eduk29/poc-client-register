import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getPersons() {
    this.http.get("assets/db.json").subscribe(data =>{
      console.log(data)});
  }
}



