import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { CartService } from '../item.service';
import { MomentModule} from 'angular2-moment';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styles: [require('./cart.component.css').toString()],
})
export class CartComponent implements OnInit {
    items: Item[] = [];
    myDate: Date;

    constructor(private cartService: CartService) {
        this.myDate = new Date();

    }

    ngOnInit(){
        this.getItems();
    }

    getItems(): void {
        this.cartService.getItems()
            .subscribe(items => this.items = items);
    }

}