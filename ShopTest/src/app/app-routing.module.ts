import { NgModule } from '@angular/core';
import { AppComponent }     from './app.component';
import { ItemsComponent }   from './items/items.component';
import { ItemService} from './item.service';
import { RouterModule, Routes} from '@angular/router';
import { WindowComponent} from './window/window.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import {CartComponent} from './cart/cart.component';

const appRoutes: Routes = [

    {   path: '',
        redirectTo: '/items',
        pathMatch: 'full'
    },
    {
        path: 'items',
        component: ItemsComponent
    },
    {
        path: 'window',
        component: WindowComponent,
        outlet: 'popup'
    },
    {
        path: 'wishlist',
        component: WishlistComponent
    },
    {
        path: 'cart',
        component: CartComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule { }