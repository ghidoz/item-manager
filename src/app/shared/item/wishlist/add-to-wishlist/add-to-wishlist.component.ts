import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../item.model';
import { WishlistService } from '../wishlist.service';

@Component({
  moduleId: module.id,
  selector: 'add-to-wishlist',
  templateUrl: 'add-to-wishlist.component.html',
  styleUrls: ['add-to-wishlist.component.css']
})
export class AddToWishlistComponent implements OnInit {

  @Input() item: Item;
  added: boolean;

  constructor(private wishlistService: WishlistService) {}

  ngOnInit() {
  }

  addToWishlist(){
    this.wishlistService.add(this.item);
    this.added = true;
  }

  removeFromWishlist(){
    this.wishlistService.remove(this.item);
    this.added = false;
  }

}
