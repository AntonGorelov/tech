import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Item } from '../item';
import { WishlistService } from '../item.service';

import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styles: [require('./wishlist.component.css').toString()],
})
export class WishlistComponent implements OnInit {
    items: Item[];
    //count = this.items.length;

    constructor(private wishlistService: WishlistService, @Inject(PLATFORM_ID) private platformId: Object) {}

    ngOnInit(){
        this.getItems();

        /* if (isPlatformBrowser(this.platformId)) {
            let item1 = {key1: this.items, key2: 'valu2' };
            localStorage.setItem( 'wishlist', JSON.stringify(item1) );
        }*/

    }
    getItems(): void {
        this.wishlistService.getItems()
            .subscribe(items => this.items = items);
        //localStorage.setItem('wishlist_items', JSON.stringify(this.items));
    }
    getHeroesById(): void {
        this.wishlistService.getItems().subscribe()
    }
    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.wishlistService.addItem({ name } as Item)
            .subscribe(item => {
                this.items.push(item);
            });
    }
    delete(item: Item): void {
        this.items = this.items.filter(i => i !== item);
        this.wishlistService.deleteItem(item).subscribe();
    }
}