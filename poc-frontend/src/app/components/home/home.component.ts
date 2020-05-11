import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";

import { PersonService } from "src/app/services/persons/person.service";

import { Contact } from "src/app/models/contact.model";
import { Document } from "src/app/models/document.model";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Person } from "src/app/models/person.model";

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
  dataSource: MatTableDataSource<Person>;
  persons: any;
  length: number;
  pageSize = 10;
  pageIndex = 1;
  pageSizeOptions: number[] = [5, 10, 15];

  constructor(private personService: PersonService) {
    this.dataSource = new MatTableDataSource(this.persons);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.getDataLength();
  }

  getDataPaginated(): void {
    this.personService
      .getPersons(this.pageSize, this.pageIndex)
      .subscribe((data: any) => {
        this.dataSource = data;
      });
  }

  getDataLength(): void {
    this.personService.getPersonsRaw().subscribe((data: Array<Person>) => {
      this.length = data.length;
      this.getDataPaginated();
    });
  }

  getPage(event) {
    this.pageIndex = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getDataPaginated();
  }

  getNewMainContact(contacts: Array<Contact>): string {
    const newContacts = contacts.filter(
      contact => contact.isPrincipal === true
    );
    return newContacts[0].value;
  }

  getNewRGDocument(documents: Array<Document>): string {
    const newDocuments = documents
      .filter((document: Document) => document.documentType.key === "RG")
      .shift();
    return !!newDocuments ? newDocuments.documentValue : "-";
  }
}
