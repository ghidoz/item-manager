import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../item.model';
import { AddToWishlistComponent } from '../../wishlist';

@Component({
  moduleId: module.id,
  selector: 'item-detail',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.css'],
  directives: [AddToWishlistComponent]
})
export class ItemComponent implements OnInit {

  @Input() item: Item;

  constructor() {}

  ngOnInit() { }

}
