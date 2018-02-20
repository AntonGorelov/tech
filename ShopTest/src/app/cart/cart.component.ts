import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { CartService } from '../item.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styles: [require('./cart.component.css').toString()],
})
export class CartComponent implements OnInit {
    items: Item[] = [];

    constructor(private cartService: CartService) {}

    ngOnInit(){
        this.getItems();
    }

    getItems(): void {
        this.cartService.getItems()
            .subscribe(items => this.items = items);
    }

}