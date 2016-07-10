import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Item } from './item.model';

@Injectable()
export class ItemService {

    private apiUrl = '/json/items.json';

    constructor(private http: Http) { }

    query(): Observable<Item[]> {
        return this.http.get(this.apiUrl)
            .map((res: any) => this.extractQueryData(res))
            .catch((res: any) => this.handleError(res));
    }

    private extractQueryData(res: any): Item[] {
        let body = res.json();
        let items: Item[] = [];
        body.items.forEach((item: any) => {
            items.push(new Item(item.title, item.description, item.price, item.email, item.image));
        })
        return items;
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}