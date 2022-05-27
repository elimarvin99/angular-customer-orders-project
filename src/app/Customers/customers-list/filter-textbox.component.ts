import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter-textbox',
  template: `
  Filter: <input type="text" [(ngModel)]="filter" />
  `,
})
export class FilterTextBoxComponent implements OnInit {

  private _filter: string;
  @Input() get filter() {
    return this._filter;
  }
    
  set filter(val: string) { 
    this._filter = val;
    //as the value is changed the filter will emit the property back to the parent
    this.changed.emit(this.filter); //Raise changed event
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
}
