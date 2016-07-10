import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item.model';
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
  @Input() compact: boolean;
  @Output() onWishlistChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() { }

  updateWishlist(){
    this.onWishlistChange.emit({
      changed: true
    });
  }

}
