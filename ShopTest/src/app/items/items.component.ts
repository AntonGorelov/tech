import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { CartService, ItemService} from '../item.service';
import { WishlistService } from '../item.service';
import { InMemoryDataService } from '../in-memory-data.service';
import { ModalService} from '../modal.service';

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styles: [require('./items.component.css').toString()],
    providers: [InMemoryDataService]
})
export class ItemsComponent implements OnInit {
    // Массив всех элементов
    items: Item[] = [];

    // Массив списка желаемого
    wishlist: Item[] = [];

    // Массив корзины
    cart: Item[] = [];

    // Выбранный элемент для вывода в форму
    selectedItem: Item;

    constructor(private itemService: ItemService,
                private wishlistService: WishlistService,
                private cartService: CartService,
                private modalService: ModalService) {}

    ngOnInit(){
        this.getItems();
    }

    getItems(){
        this.itemService.getItems().subscribe(items => this.items = items)
    }

    // Добавление элементов в список желаний
    add(item: Item): void {
        this.wishlistService.addItem(item).subscribe(item => {this.wishlist.push(item);})
        console.log('addToWishlist() from ItemsComponent',item)
        //name = 'iphone';
        //if (!name) { return; }
        //this.wishlistService.addItem({ name } as Item).subscribe(item => { this.items.push(item); });
    }

    // Добавление элементов в корзину
    addToCart(item: Item): void {
        this.cartService.addItem(item).subscribe(item => {this.cart.push(item);})
        console.log('addToCart()',item);
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