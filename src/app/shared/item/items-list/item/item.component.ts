import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../item.model';

@Component({
  moduleId: module.id,
  selector: 'item-detail',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;

  constructor() {}

  ngOnInit() {
    console.log('ciao');
  }

}
