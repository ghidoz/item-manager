import { Component, OnInit } from '@angular/core';
import { ItemsListComponent } from '../shared/item';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ItemsListComponent]
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
