import { Component, OnInit} from '@angular/core';
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
                private modalService: ModalService) {
    }

    ngOnInit(){
        this.getItems();
        this.setLS();
        this.getLS();
    }
    getItems(): void {
        this.wishlistService.getItems().subscribe(items => this.items = items);
    }

    // Добавление элементов в корзину
    addToCart(item: Item): void {
        this.cartService.addItem(item).subscribe(item => {this.cart.push(item);})
        //console.log(item);
        //localStorage.setItem('wishlist_items', JSON.stringify(item));
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

    // LocalStorage
    setLS(){
        let name: string = "17";

        let wishlist = [
            { id: 8,  name: 'iPhone X',  price: 80000, image: './src/img/iphone8.png' },
            { id: 13, name: 'Galaxy S7', price: 42000, image: './src/img/galaxys7.png'},
            { id: 14, name: 'Galaxy S8', price: 45000, image: './src/img/galaxys8.png'},
            { id: 15, name: 'Galaxy SS', price: 45000, image: './src/img/iphone8.png' }
        ];

        localStorage.setItem("name", name);
        localStorage.setItem("data", JSON.stringify(wishlist));
    }

    getLS(){
        let data = JSON.parse(localStorage.getItem("data"));
    }
}
