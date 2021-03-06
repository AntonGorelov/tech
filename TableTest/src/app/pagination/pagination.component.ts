import { Item }      from '../item';
import { ITEMS }     from '../items';
import { Component } from '@angular/core';

@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html',
    //styleUrls: ['pagination.component.css'],
})
export class PaginationComponent {
    filteredItems : Item[];
    pages : number = 3;
    pageSize : number = 5;
    pageNumber : number = 0;
    currentIndex : number = 1;
    items: Item[];
    pagesIndex : Array<number>;
    pageStart : number = 1;

    constructor() {
        this.filteredItems = ITEMS;
        this.init();
    };

    init() {
        this.currentIndex = 1;
        this.pageStart = 1;
        this.pages = 4;

        console.log('filteredItems =', this.filteredItems.length)
        this.pageNumber = parseInt(""+ (this.filteredItems.length / this.pageSize));
        if(this.filteredItems.length % this.pageSize != 0){
            this.pageNumber ++;
        }

        if(this.pageNumber  < this.pages){
            this.pages =  this.pageNumber;
        }

        this.refreshItems();
        console.log("this.pageNumber :  ",this.pageNumber);
    }

    fillArray(): any {
        var obj = new Array();
        for(var index = this.pageStart; index< this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    }
    refreshItems() {
        this.items = this.filteredItems.slice((this.currentIndex - 1)*this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex =  this.fillArray();
    }
    prevPage() {
        if(this.currentIndex>1){
            this.currentIndex --;
        }
        if(this.currentIndex < this.pageStart){
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    }
    nextPage() {
        if(this.currentIndex < this.pageNumber){
            this.currentIndex ++;
        }
        if(this.currentIndex >= (this.pageStart + this.pages)){
            this.pageStart = this.currentIndex - this.pages + 1;
        }

        //this.refreshItems();
    }

    setPage(index : number) {
        this.currentIndex = index;
        this.refreshItems();
    }
}