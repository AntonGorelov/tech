import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { WishlistService } from '../item.service';
import { InMemoryDataService } from '../in-memory-data.service';

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styles: [require('./items.component.css').toString()],

    providers: [InMemoryDataService]
})
export class ItemsComponent implements OnInit {
    items: Item[] = [];

    constructor(private itemService: ItemService, private wishlistService: WishlistService) {}

    ngOnInit(){
        this.getItems();
    }

    getItems(){
        this.itemService.getItems().subscribe(items => this.items = items)
    }

    add(item: Item): void {
        this.items = this.items.filter(i => i !== item);
        this.wishlistService.addItem(item).subscribe(item => { this.items.push(item); });
        console.log(item)
        //name = 'iphone';
        //if (!name) { return; }
        //this.wishlistService.addItem({ name } as Item).subscribe(item => { this.items.push(item); });
    }

}