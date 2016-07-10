import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'filter',
  templateUrl: 'filter.component.html',
  styleUrls: ['filter.component.css']
})
export class FilterComponent implements OnInit {

  item: any = {};
  @Output() filters: EventEmitter<any> = new EventEmitter();
  @Input() compact: boolean;


  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(){
    this.filters.emit(this.item);
  }

}
