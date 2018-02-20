import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
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
    items: Item[] = [];
    wishlist: Item[] = [];

    constructor(private itemService: ItemService,
                private wishlistService: WishlistService,
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
        console.log(item)
        //name = 'iphone';
        //if (!name) { return; }
        //this.wishlistService.addItem({ name } as Item).subscribe(item => { this.items.push(item); });
    }

    openModal(id: string){
        this.modalService.open(id);
    }

    closeModal(id: string){
        this.modalService.close(id);
    }

}