import { Component, OnInit } from "@angular/core";
import { PersonService } from "src/app/services/persons/person.service";

import { Contact } from "src/app/models/contact.model";
import { Document } from "src/app/models/document.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = [
    "position",
    "name",
    "gender",
    "contact",
    "document"
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

  getNewMainContact(contacts: Array<Contact>): string {
    let newContacts = contacts.filter(contact => contact.isPrincipal === true);
    return newContacts[0].value;
  }


  getNewRGDocument(documents: Array<Document>): string {
    const newDocuments = documents
      .filter((document: Document) => document.documentType.key === 'RG')
      .shift();
    return !!newDocuments ? newDocuments.documentValue : '-';
  }
}
   
   


