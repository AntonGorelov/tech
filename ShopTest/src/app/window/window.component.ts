import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../item.service';

import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'window',
    templateUrl: './window.component.html',
    styles: [require('../items/items.component.css').toString(), require('./window.component.css').toString()]
})
export class WindowComponent implements OnInit{

    @Input() item: Item;

    constructor (
        private id:number,
        private router: Router,
        private route: ActivatedRoute,
        private itemService: ItemService,
        private subscription: Subscription) {

        //this.item = route.snapshot.params['item']
        //this.subscription = route.params.subscribe(params=>this.id=params['id'])

    }

    ngOnInit() {
        this.getItem();
    }

    getItem(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.itemService.getItem(id)
            .subscribe(item => this.item = item);
    }

    //@Input() itemName:  string;
    //@Input() itemPrice: number;


    onClose() {
        this.router.navigate([{ outlets: { popup: null }}]);
    }
}