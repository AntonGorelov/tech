import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Item} from './item';
import { catchError} from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ItemService {

    private itemsUrl = 'api/items';  // URL to web api

    constructor(
        private http: HttpClient){}

    // load items in table
    getItems (): Observable<Item[]> {
        return this.http.get<Item[]>(this.itemsUrl)
            .pipe(
                catchError(this.handleError('getItems', []))
            );
    }

    // load names of columns in table
    getColumns(): string[]{
        return ["id", "name", "price"]};

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }

}

