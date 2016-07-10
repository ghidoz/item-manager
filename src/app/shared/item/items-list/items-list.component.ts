import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.model';
import { ItemComponent } from './item/item.component';

@Component({
    moduleId: module.id,
    selector: 'items-list',
    templateUrl: 'items-list.component.html',
    styleUrls: ['items-list.component.css'],
    providers: [ItemService],
    directives: [ItemComponent]
})
export class ItemsListComponent implements OnInit {

    items: Item[];
    
    constructor(private itemService: ItemService) { }

    ngOnInit() { 
        this.itemService.query().subscribe((items: Item[]) => {
            this.items = items;
        });
    }

}
