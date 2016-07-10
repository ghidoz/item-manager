import { Component, OnInit } from '@angular/core';
import { ItemsListComponent, FilterComponent, SortComponent, WishlistService } from '../shared/item';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ItemsListComponent, FilterComponent, SortComponent],
  providers: [WishlistService]
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
