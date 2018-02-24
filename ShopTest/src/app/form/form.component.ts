import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styles: [require('./form.component.css').toString()],
})
export class FormComponent implements OnInit {

    // Выражение для ввода номера телефона
    PHONE_PATTERN = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

    constructor(){}

    ngOnInit(){}


    applyForm(value: any) {
        console.log(value);
        return value;
    }
}