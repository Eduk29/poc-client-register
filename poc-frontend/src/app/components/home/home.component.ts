import { Component, OnInit } from "@angular/core";
import { PersonService } from "src/app/services/persons/person.service";

import { Person } from "src/app/models/person.model";
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

    this.persons.subscribe(data => {
      this.dataSource = data;
      console.log(data);
    });
  }

  getContatoPrincipalNovo(contacts: Array<Contact>): string {
    let newContacts = contacts.filter(contact => contact.isPrincipal === true);
    console.log("Contatos: ", newContacts);
    return newContacts[0].value;
  }

  //funciona
  // getContatoPrincipal(contacts: Array<any>): String {
  //   for (var i=0; i<contacts.length; i++) {
  //     if (contacts[i].isPrincipal){
  //       return contacts[i].value;
  //     }
  //   }
  // }


  //não funciona
  // getDocumentoRGNovo(documents: Array<any>) {
  //   let newDocuments = documents.filter(
  //     document => document.documentType.value === "RG"
  //   );
  //   console.log("Documentos: ", newDocuments);
  //    if (!newDocuments[0] == undefined) {
  //      return newDocuments[0].documentValue;
  //    } return '-'
  // }

  getDocumentoRGNovo(documents: Array<any>): string {
    const newDocuments = documents
      .filter((document: Document) => document.documentValue === 'RG')
      .shift();
    console.log("Documentos: ",newDocuments)
    return !!newDocuments ? newDocuments.documentValue : '-';
  }

  //funciona
  getDocumentoRG(documents: Array<any>): string {

    for (var i=0; i<documents.length; i++) {
      if (documents[i].documentType.value === 'RG')  {
        return documents[i].documentValue;
      }
      return '-';
    }
   }
}
   
   


