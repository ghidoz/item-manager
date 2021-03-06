import { Injectable } from '@angular/core';
import { Item } from '../item';

@Injectable()
export class WishlistService {

    wishlist: Item[] = [];

    constructor() { }

    add(item: Item){
        this.wishlist.push(item);
    }

    remove(id: number){
        this.wishlist = _.reject(<any>this.wishlist, (item: any) => item.id === id);
    }

    isAdded(id: number){
        return typeof _.findWhere(this.wishlist, {id: id}) !== 'undefined';
    }

    filterByTitle(title: string){
        return _.filter(this.wishlist, (item) => {
            return item.title.toLowerCase().indexOf(title) !== -1;
        });
    }

}