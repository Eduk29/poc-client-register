import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";

import { PersonService } from "src/app/services/persons/person.service";

import { Contact } from "src/app/models/contact.model";
import { Document } from "src/app/models/document.model";
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})


export class HomeComponent implements OnInit, AfterViewInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    "position",
    "name",
    "gender",
    "contact",
    "document"
  ];
  dataSource = this.dataSource;
  persons: any;
  length = 1000;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 15];
  // MatPaginator Output
  pageEvent: PageEvent;

  pageIndex:number = 0;
  lowValue:number = 0;
  highValue:number = 10;   
  

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.persons = this.personService.getPersons();

    this.persons.subscribe((data) => {
      this.dataSource = data;
      console.log(data);
    });
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(
       (event) => console.log(event)
    );
  }

  getNewMainContact(contacts: Array<Contact>): string {
    const newContacts = contacts.filter(contact => contact.isPrincipal === true);
    return newContacts[0].value;
  }

  

  getNewRGDocument(documents: Array<Document>): string {
    const newDocuments = documents
      .filter((document: Document) => document.documentType.key === 'RG')
      .shift();
    return !!newDocuments ? newDocuments.documentValue : '-';
  }

  getPaginatorData(event){
    console.log(event);
    if(event.pageIndex === this.pageIndex + 1){
       this.lowValue = this.lowValue + this.pageSize;
       this.highValue =  this.highValue + this.pageSize;
      }
    else if(event.pageIndex === this.pageIndex - 1){
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue =  this.highValue - this.pageSize;
     }   
      this.pageIndex = event.pageIndex;
}
}


   
   


