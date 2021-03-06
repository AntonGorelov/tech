import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { CartService, WishlistService } from '../item.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styles: [require('./cart.component.css').toString()],
})
export class CartComponent implements OnInit {
    items: Item[] = [];
    wishlist: Item[] = [];
    myDate: Date;

    constructor(private cartService: CartService,
                private wishlistService: WishlistService) {
        this.myDate = new Date();
    }

    ngOnInit() {
        this.getItems();
    }

    getItems(): void {
        this.cartService.getItems().subscribe(items => this.items = items);
    }

    // Добавление элементов в список желаний
    add(item: Item): void {
        this.wishlistService.addItem(item).subscribe(item => {this.wishlist.push(item);})
        console.log('addToWishlist() from CartComponent',item)
        // Удаление из корзины
        this.cartService.deleteItem(item).subscribe();
    }

    delete(item: Item): void {
        this.items = this.items.filter(i => i !== item);
        this.cartService.deleteItem(item).subscribe();
    }

    increase(item: Item) : void {
        item.count++;
    }

    decrease(item: Item) : void {
        if (item.count > 1) {
            item.count--;
        }
        if (item.count == 1) {
            this.cartService.deleteItem(item).subscribe();
        }
    }

}