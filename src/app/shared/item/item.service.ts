import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Item } from './item.model';
import 'rxjs/add/observable/of';
import * as _ from 'underscore';

@Injectable()
export class ItemService {

    private apiUrl = 'json/items.json';
    private data: Item[] = [];

    constructor(private http: Http) { }

    query(page: number, size: number = 5, filters?: any, sortBy?: string): Observable<Item[]> {
        page--;
        if(this.data.length > 0){
            return Observable.of(this.data)
                .map((items: Item[]) => this.filter(items, filters))
                .map((items: Item[]) => this.sort(items, sortBy))
                .map((items: Item[]) => this.paginate(items, page, size))
        }
        return this.http.get(this.apiUrl)
            .map((res: any) => this.extractQueryData(res))
            .map((items: Item[]) => this.filter(items, filters))
            .map((items: Item[]) => this.sort(items, sortBy))
            .map((items: Item[]) => this.paginate(items, page, size))
            .catch((res: any) => this.handleError(res));
    }

    isLastPage(total: number): boolean {
        return total === this.data.length;
    }

    private extractQueryData(res: any): Item[] {
        let body = res.json();
        let items: Item[] = [];
        let index = 1;
        body.items.forEach((item: any) => {
            items.push(new Item(index, item.title, item.description, +item.price, item.email, item.image));
            index++;
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

    private filter(items: Item[], filters?: any): Item[]{
        if(!filters) return items;
        let results: any[] = items;
        for(let key of _.keys(filters)){
            if(filters[key] && filters[key] !== ''){
                results = this.search(results, filters[key], key);
            }
        }
        return results;
    }

    private search(results: Item[], keyword: string, field: string){
        return _.filter(results, (item) => {
            if(isNaN(item[field])){
                return item[field].toLowerCase().indexOf(keyword) !== -1;
            }
            return item[field] <= keyword;
        });
    }

    private sort(items: Item[], sortBy: string){
        return _.sortBy(items, sortBy);
    }

}