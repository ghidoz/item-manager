import { Injectable } from '@angular/core';
import { Item } from '../item.model';

@Injectable()
export class WishlistService {

    wishlist: Item[] = [];

    constructor() { }

    add(item: Item){
        this.wishlist.push(item);
    }

    remove(item: Item){
        let index = this.wishlist.indexOf(item);
        if(index !== -1) {
            this.wishlist.splice(index, 1);
        }
    }

}