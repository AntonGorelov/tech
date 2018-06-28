import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {ItemService} from '../item.service';
import { Observable } from 'rxjs/Observable';
import { Item} from '../item';

@Component({
    selector: 'ng-table',
    templateUrl: './table.component.html'
})

export class NgTableComponent implements OnInit {

    // Массив всех элементов
    items: Item[] = [];
    columns: string[];

    constructor(private itemService: ItemService){}

    ngOnInit() {
        this.getItems();
        this.columns = this.itemService.getColumns()
        console.log(this.config)
    }

    getItems() {
        this.itemService.getItems().subscribe(items => this.items = items);
    }

    config = {
        heading: [
            {
                title: 'Id',
                name: 'col1'
            },
            {
                title: 'Name',
                name: 'col2'
            },
            {
                title: 'Price',
                name: 'col3'
            }
        ],

        fetch: (params: any) => {
            return {
                data: [
                    {
                        col1: 'phone1',
                        col2: 'phone2',
                        col3: 'phone3'
                    },
                    {
                        col1: 'col1 data',
                        col2: 'col2 data',
                        col3: 'col3 data'
                    },
                    {
                        col1: 'col1 data',
                        col2: 'col2 data',
                        col3: 'col3 data'
                    },
                ]
            }
        }
    }

}