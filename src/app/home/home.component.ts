import { Component, OnInit } from '@angular/core';
import { ItemsListComponent, FilterComponent, SortComponent } from '../shared/item';
import { WishlistService, ShowWishlistComponent } from '../shared/wishlist';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ItemsListComponent, FilterComponent, SortComponent, ShowWishlistComponent],
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
