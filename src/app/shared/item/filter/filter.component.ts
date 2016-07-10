import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'filter',
  templateUrl: 'filter.component.html',
  styleUrls: ['filter.component.css']
})
export class FilterComponent implements OnInit {

  item: any = {};
  @Output() filters: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(){
    this.filters.emit(this.item);
  }

}
