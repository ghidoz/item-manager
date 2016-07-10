import { Component, OnInit } from '@angular/core';
import { ItemsListComponent, FilterComponent } from '../shared/item';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ItemsListComponent, FilterComponent]
})
export class HomeComponent implements OnInit {

  filters: any;

  constructor() {}

  ngOnInit() {
  }

  onFiltersChange(filters){
    this.filters = _.clone(filters);
  }

}
