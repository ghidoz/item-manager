import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../item';
import { WishlistService } from '../wishlist.service';

@Component({
  moduleId: module.id,
  selector: 'add-to-wishlist',
  templateUrl: 'add-to-wishlist.component.html',
  styleUrls: ['add-to-wishlist.component.css']
})
export class AddToWishlistComponent implements OnInit {

  @Input() item: Item;
  private _added: boolean;

  constructor(private wishlistService: WishlistService) {}

  ngOnInit() {
  }

  addToWishlist(){
    this.wishlistService.add(this.item);
    this.added = true;
  }

  removeFromWishlist(){
    this.wishlistService.remove(this.item.id);
    this.added = false;
  }

  get added(): boolean {
    this._added = this.wishlistService.isAdded(this.item.id);
    return this._added;
  }

  set added(value: boolean){
    this._added = value;
  }

}
