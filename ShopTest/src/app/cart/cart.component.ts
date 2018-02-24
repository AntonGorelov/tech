import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { CartService, WishlistService} from '../item.service';
import { FormComponent} from '../form/form.component';
import { MomentModule} from 'angular2-moment';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styles: [require('./cart.component.css').toString()],
})
export class CartComponent implements OnInit {
    items: Item[] = [];
    wishlist: Item[] = [];
    myDate: Date;
    countOfItem: number=1;

    constructor(private cartService: CartService,
                private wishlistService: WishlistService) {
        this.myDate = new Date();
    }

    ngOnInit(){
        this.getItems();
    }

    getItems(): void {
        this.cartService.getItems()
            .subscribe(items => this.items = items);
    }

    // Добавление элементов в список желаний
    add(item: Item): void {
        this.wishlistService.addItem(item).subscribe(item => {this.wishlist.push(item);})
        console.log('addToWishlist() from CartComponent',item)
    }

    delete(item: Item): void {
        this.items = this.items.filter(i => i !== item);
        this.wishlistService.deleteItem(item).subscribe();
    }

    increase(item: Item) : void {
        this.countOfItem++;
    }

    decrease(item: Item) : void {
        if (this.countOfItem > 1) {
            this.countOfItem--;
        }
    }

}