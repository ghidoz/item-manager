import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Item } from './item.model';
import 'rxjs/add/observable/of';
import * as _ from 'underscore';

@Injectable()
export class ItemService {

    private apiUrl = 'json/items.json';
    private data: Item[];

    constructor(private http: Http) { }

    query(page: number, size: number = 5): Observable<Item[]> {
        page--;
        if(this.data){
            return Observable.of(this.data)
                .map((items: Item[]) => this.paginate(items, page, size))
        }
        return this.http.get(this.apiUrl)
            .map((res: any) => this.extractQueryData(res))
            .map((items: Item[]) => this.paginate(items, page, size))
            .catch((res: any) => this.handleError(res));
    }

    private extractQueryData(res: any): Item[] {
        let body = res.json();
        let items: Item[] = [];
        body.items.forEach((item: any) => {
            items.push(new Item(item.title, item.description, item.price, item.email, item.image));
        })
        this.data = items;
        return items;
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    private paginate(items: Item[], page: number, size: number){
        let paginated = _.chain(items).rest(page * size).first(size).value();
        return paginated;
    }

}