import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/persons/person.service';
import { Observable } from 'rxjs';

import { Person } from "src/app/models/person.model";
import { Contact } from "src/app/models/contact.model";
import { Document } from "src/app/models/document.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = [
    "position",
    "name",
    "gender",
    "contact",
    "document",
  ];
  //dataSource = new PersonDataSource(this.personService);
  dataSource = this.dataSource;
  persons: any;

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.persons = this.personService.getPersons();

    this.persons.subscribe((data) => {
      this.dataSource = data;
      console.log(data);
    });
  }

  //não funciona
  getContatoPrincipalNovo(contacts: Array<Contact>): string {
    const contact = contacts
      .filter((contactItem) => contactItem.isPrincipal === true)
      .shift();
    return contact.value;
  }

  checkIsPrincipal(contacts: Array<any>) {
    var n: number;
    return contacts[n].isPrincipal === true;
  }

  //funciona
  getContatoPrincipal(contacts: Array<any>): String {
    for (var i = 0; i < contacts.length; i++) {
      if (contacts[i].isPrincipal) {
        return contacts[i].value;
      }
    }
  }

  getDocumentoRG(documents: Array<any>): String {
    for (var i = 0; i < documents.length; i++) {
      if (documents[i].documentType.value === "RG") {
        return documents[i].documentValue;
      }
      return "-";
    }
  }
}
