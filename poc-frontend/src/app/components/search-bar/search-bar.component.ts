import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { PersonService } from "src/app/services/persons/person.service";
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Person } from 'src/app/models/person.model';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  selectedValue: string;

  @Input() dataSource: MatTableDataSource<Person>;
  @Input() table: MatTable<Person>;
  @Input() inputValue: string;
  @Output() searchExecute = new EventEmitter();

  constructor(private personService: PersonService) { }

  ngOnInit() {

    
  }

   displaySearchInput(): boolean {
     return this.selectedValue === 'name' || this.selectedValue === 'mainContact' ||  this.selectedValue === 'rg';
   }

  emitSearch(): void {
    const filter = {selectedValue: this.selectedValue, inputValue: this.inputValue}
    this.searchExecute.emit(filter);
  }
}

