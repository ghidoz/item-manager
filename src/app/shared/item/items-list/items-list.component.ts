import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { InfiniteScroll } from 'angular2-infinite-scroll';
import { ItemService } from '../item.service';
import { Item } from '../item.model';
import { ItemComponent } from './item/item.component';

@Component({
    moduleId: module.id,
    selector: 'items-list',
    templateUrl: 'items-list.component.html',
    styleUrls: ['items-list.component.css'],
    providers: [ItemService],
    directives: [ItemComponent, InfiniteScroll]
})
export class ItemsListComponent implements OnInit, OnChanges {

    items: Item[] = [];
    page: number = 1;
    pageSize: number = 4;
    @Input() filters: any;

    constructor(private itemService: ItemService) { }

    ngOnInit() { 
        this.getItems();
    }

    getItems(append: boolean = false){
        this.itemService.query(this.page, this.pageSize, this.filters).subscribe((items: Item[]) => {
            this.items = append ? this.items.concat(items) : items;
        });
    }

    loadMore(){
        this.page++;
        this.getItems(true);
    }

    get isLastPage(){
        return this.itemService.isLastPage(this.items.length);
    }

    ngOnChanges(changes: any) {
        let filters: any = changes.filters.currentValue;
        if(filters){
            this.page = 1;
            this.getItems(false);
        }
    }

}
