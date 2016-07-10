import { Component, OnInit, forwardRef } from '@angular/core';
import {MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap';
import { Item, ItemComponent } from '../../item';
import { WishlistService } from '../wishlist.service';

@Component({
  moduleId: module.id,
  selector: 'show-wishlist',
  templateUrl: 'show-wishlist.component.html',
  styleUrls: ['show-wishlist.component.css'],
  directives: [MODAL_DIRECTVES, forwardRef(() => ItemComponent)],
  viewProviders:[BS_VIEW_PROVIDERS],
})
export class ShowWishlistComponent implements OnInit {

  items: Item[];

  constructor(private wishlistService: WishlistService) {}

  ngOnInit() {}

  onDialogShow(){
    this.updateWishlist();
  }

  updateWishlist(){
    this.items = this.wishlistService.wishlist;
  }

}
