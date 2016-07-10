import { Component, OnInit } from '@angular/core';
import { ItemService, Item } from '../index';

@Component({
    moduleId: module.id,
    selector: 'items-list',
    templateUrl: 'items-list.component.html',
    styleUrls: ['items-list.component.css'],
    providers: [ItemService]
})
export class ItemsListComponent implements OnInit {
    
    constructor(private itemService: ItemService) { }

    ngOnInit() { 
        this.itemService.query().subscribe((items: Item[]) => {
            console.log(items);
        });
    }

}
