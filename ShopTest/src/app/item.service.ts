import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { Item } from './item';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ItemService {

    private itemsUrl = 'api/items';  // URL to web api

    constructor(
        private http: HttpClient){}

    getItems (): Observable<Item[]> {
        return this.http.get<Item[]>(this.itemsUrl)
            .pipe(
                catchError(this.handleError('getItems', []))
            );
    }

    getItem(id: number): Observable<Item> {
        const url = `${this.itemsUrl}/${id}`;
        return this.http.get<Item>(url).pipe(
            catchError(this.handleError<Item>(`getItem id=${id}`))
        );
    }

    addItem (item: Item): Observable<Item> {
        return this.http.post<Item>(this.itemsUrl, item, httpOptions).pipe(
            catchError(this.handleError<Item>('addItem'))
        );
    }

    deleteItem (item: Item | number): Observable<Item> {
        const id = typeof item === 'number' ? item : item.id;
        const url = `${this.itemsUrl}/${id}`;

        return this.http.delete<Item>(url, httpOptions).pipe(
            catchError(this.handleError<Item>('deleteItem'))
        );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}


@Injectable()
export class WishlistService {

    private wishlistUrl = 'api/wishlist';  // URL to web api

    constructor(
        private http: HttpClient){}

    getItems (): Observable<Item[]> {
        return this.http.get<Item[]>(this.wishlistUrl)
            .pipe(
                catchError(this.handleError('getItems', []))
            );
    }

    getItem(id: number): Observable<Item> {
        const url = `${this.wishlistUrl}/${id}`;
        return this.http.get<Item>(url).pipe(
            catchError(this.handleError<Item>(`getItem id=${id}`))
        );
    }

    addItem (item: Item): Observable<Item> {
        return this.http.post<Item>(this.wishlistUrl, item, httpOptions).pipe(
            catchError(this.handleError<Item>('addItem'))
        );
    }

    deleteItem (item: Item | number): Observable<Item> {
        const id = typeof item === 'number' ? item : item.id;
        const url = `${this.wishlistUrl}/${id}`;

        return this.http.delete<Item>(url, httpOptions).pipe(
            catchError(this.handleError<Item>('deleteItem'))
        );
    }

    updateItems (items: Item[]): Observable<any> {
        return this.http.put(this.wishlistUrl, items, httpOptions).pipe(
            catchError(this.handleError<any>('updateItems'))
        );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}

@Injectable()
export class CartService {

    private cartUrl = 'api/cart';  // URL to web api

    constructor(
        private http: HttpClient){}

    getItems (): Observable<Item[]> {
        return this.http.get<Item[]>(this.cartUrl)
            .pipe(
                catchError(this.handleError('getItems', []))
            );
    }

    addItem (item: Item): Observable<Item> {
        return this.http.post<Item>(this.cartUrl, item, httpOptions).pipe(
            catchError(this.handleError<Item>('addItem'))
        );
    }

    deleteItem (item: Item | number): Observable<Item> {
        const id = typeof item === 'number' ? item : item.id;
        const url = `${this.cartUrl}/${id}`;

        return this.http.delete<Item>(url, httpOptions).pipe(
            catchError(this.handleError<Item>('deleteItem'))
        );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}