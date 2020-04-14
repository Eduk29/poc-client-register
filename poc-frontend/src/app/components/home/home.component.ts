import { Component, OnInit } from "@angular/core";
import { PersonService } from "src/app/services/persons/person.service";
import { DataSource } from "@angular/cdk/collections";
import { Observable } from "rxjs";

import { Person } from "src/app/models/person.model";
import { Contact } from 'src/app/models/contact.model';
import { Document } from 'src/app/models/document.model';

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
  dataSource = new PersonDataSource(this.personService);
  persons: any;
  contato: Array<Contact>;
  documento: Array<Document>;
  

  getContatoPrincipal(contato): String {
    for (var i=0; i<=contato.length; i++) {
      if (contato[i].isPrincipal){
        return contato[i].valor;
      }
    }
  }

  getDocumentoRG(documento): String {
    
    for (var i=0; i<=documento.length; i++) {
      if (documento[i].documentos.tipoDocumento.valor === "RG"){
        return documento[i].documentos.valorDocumento;
      }
    }

  }

  constructor(
    private personService: PersonService
  ) {}

  ngOnInit() {
    this.persons = this.personService.getPersons();

    this.persons.subscribe(data => {
      console.log(data);
    });
  }
}

export class PersonDataSource extends DataSource<any> {
  constructor(
    private personService: PersonService
  ) {
    super();
  }
  connect(): Observable<Person[]> {
    return this.personService.getPersons();
  }
  disconnect() {}
}
