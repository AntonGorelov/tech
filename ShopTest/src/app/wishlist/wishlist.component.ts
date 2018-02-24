import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Item } from '../item';
import { CartService, WishlistService} from '../item.service';
import { ModalService} from '../modal.service';
import { InMemoryDataService} from '../in-memory-data.service';

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styles: [require('./wishlist.component.css').toString()],
    providers: [InMemoryDataService]
})
export class WishlistComponent implements OnInit {
    items: Item[];

    // Массив корзины
    cart: Item[] = [];

    // Выбранный элемент для вывода в форму
    selectedItem: Item;

    constructor(private wishlistService: WishlistService,
                private cartService: CartService,
                private modalService: ModalService,
                @Inject(PLATFORM_ID) private platformId: Object) {}

    ngOnInit(){
        this.getItems();
    }
    getItems(): void {
        this.wishlistService.getItems()
            .subscribe(items => this.items = items);
        //localStorage.setItem('wishlist_items', JSON.stringify(this.items));
    }

    // Добавление элементов в корзину
    addToCart(item: Item): void {
        this.cartService.addItem(item).subscribe(item => {this.cart.push(item);})
        // Удаление из списка желаний
        this.wishlistService.deleteItem(item).subscribe();
        console.log('addToCart()',item);
    }

    delete(item: Item): void {
        this.items = this.items.filter(i => i !== item);
        this.wishlistService.deleteItem(item).subscribe();
    }

    // Выбор элемента из массива для вывода в форме
    select(item: Item) {
        this.selectedItem = item;
    }

    openModal(id: string){
        this.modalService.open(id);
    }

    closeModal(id: string){
        this.modalService.close(id);
    }
}