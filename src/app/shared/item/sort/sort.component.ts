import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sort',
  templateUrl: 'sort.component.html',
  styleUrls: ['sort.component.css']
})
export class SortComponent implements OnInit {

  fields: string[] = ['title', 'description', 'price', 'email'];
  @Output() sortBy: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  onSortChange($event){
    this.sortBy.emit($event);
  }

}
