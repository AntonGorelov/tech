import {Component, ElementRef} from '@angular/core';
// Подключение Bootstrap стилей
import '../vendor.scss';
// Подключение стилей для модального окна
import '../vendor.less';
import * as jquery from 'jquery';
import { Item } from './item';
import {CartService, WishlistService} from './item.service';
import { CartComponent } from './cart/cart.component';
import { InMemoryDataService} from './in-memory-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [require('./app.component.css').toString()],
  providers: [InMemoryDataService]
})
export class AppComponent {
  name = 'app';

  /* Блок модального окна */
  items: Item[];
  wishlist: Item[] = [];
  cartItems: Item[] = [];

  private element: JQuery;

  constructor(private el: ElementRef,
              private wishlistService: WishlistService,
              private cartService: CartService) {
    this.element = jquery(el.nativeElement);
    this.getItems();
    this.getCartItems();
    this.sumItems(this.cartItems);
  }

  getItems(): void {
    this.wishlistService.getItems().subscribe(items => this.wishlist = items);
  }

  getCartItems(): void {
      this.cartService.getItems().subscribe(items => this.cartItems = items);
  }

  openModalWishlist(): void {
    //update items in dropdown menu if add new item
    this.wishlistService.getItems().subscribe(items => this.wishlist = items);
    document.getElementById("myDropdown").classList.toggle("show");
  }
  closeModalWishlist(): void {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Сумма элементов в корзине
  sumItems (items: Item[]): number {
      var total = 0;
      for (var i = 0; i < items.length; i++) {
          total += items[i].price;
      }
      return total;
  }
}
