import { BrowserModule }     from '@angular/platform-browser';
import { NgModule }          from '@angular/core';
import { HttpClientModule }  from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }      from './app.component';
import { ItemsComponent }    from './items/items.component';
import { CartService, ItemService, WishlistService} from './item.service';
import { RouterModule }      from '@angular/router';
import { AppRoutingModule }  from './app-routing.module';
import { ModalComponent }    from './window/window.component';
import { FormsModule }       from '@angular/forms';
import { ModalService}       from './modal.service';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent}      from './cart/cart.component';
import {MomentModule} from 'angular2-moment';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ModalComponent,
    WishlistComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(
          InMemoryDataService, { dataEncapsulation: false }
      ),
      AppRoutingModule,
      RouterModule,
      FormsModule,
      MomentModule
  ],
  providers: [ItemService, WishlistService, CartService, RouterModule, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
