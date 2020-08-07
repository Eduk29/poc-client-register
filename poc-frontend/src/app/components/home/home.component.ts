import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Person } from '../../models/person.model';
import { ContactService } from '../../services/contacts/contacts.service';
import { PersonService } from '../../services/persons/person.service';
import { Filter } from './../../models/filter.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<Person>();
  private filter: Filter;
  persons: Person[];

  length: number;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  displayedColumns: string[] = [
    'id',
    'name',
    'gender',
    'contact',
    'document'
  ];

  constructor(private personService: PersonService, private contactService: ContactService) {
    this.filter = {};
    this.persons = [];
  }

  ngOnInit() {
    this.listPersons();
    this.getTotalElements();
  }

  listPersons(): void {
    this.personService
      .getPersons(this.pageIndex + 1, this.pageSize)
      .subscribe(response => {
        this.dataSource.data = response;
      });
  }

  filterPersonsByFilter(): void {
    this.personService
      .findPersonsByFilter(this.pageIndex + 1, this.pageSize, this.filter)
      .subscribe(response => {
        this.length = response.length;
        this.dataSource.data = response;
      })
  }

  filterPersonByFilterContact(): void {
    const personsListFiltered: Person[] = [];
    this.personService
      .getTotalElements()
      .subscribe((response: Person[]) => {
        response.forEach((person: Person) => {
          const contact = person.contacts.filter(contact => contact.isPrincipal === true && contact.value.includes(this.filter.valueInput));
          if (contact.length > 0) {
            personsListFiltered.push(person);
          }
        });
        this.length = personsListFiltered.length;
        this.dataSource.data = personsListFiltered;
      });
  }

  filterPersonByFilterDocument(): void {
    const personsListFiltered: Person[] = [];
    this.personService
      .getTotalElements()
      .subscribe((response: Person[]) => {
        response.forEach((person: Person) => {
          const document = person.documents.filter(document => document.documentType.key === 'RG' && document.documentValue.includes(this.filter.valueInput));
          if (document.length > 0) {
            personsListFiltered.push(person);
          }
        });
        this.length = personsListFiltered.length;
        this.dataSource.data = personsListFiltered;
      });
  }

  getTotalElements(): void {
    this.personService
      .getTotalElements()
      .subscribe(response => {
        this.length = response.length;
      });
  }

  getPage(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.listPersons();
  }

  displayMainContact(person: Person): string {
    return person.contacts.filter(contact => contact.isPrincipal === true).shift().value;
  }

  displayDocumentRG(person: Person): string {
    const doc = person.documents.filter(document => document.documentType.key === 'RG').shift();
    return !!doc && !!doc.documentValue ? doc.documentValue : '-';
  }

  onSearch(event): void {
    this.pageIndex = 0;

    if (event.filterBy === 'mainContact') {
      this.filterPersonByFilterContact();
    } else if (event.filterBy === 'rg') {
      this.filterPersonByFilterDocument();
    } else if (event.filterBy === 'name' || event.filterBy === 'gender') {
      this.filterPersonsByFilter();
    } else {
      this.listPersons();
    }
  }
}




