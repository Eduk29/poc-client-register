import { Filter } from './../../models/filter.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() filter: Filter;
  @Output() searchEvent = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onSearch(): void {
    this.searchEvent.emit(this.filter);
  }

  disabledButton(): boolean {
    return !this.filter.genderInput && !this.filter.valueInput;
  }

}
