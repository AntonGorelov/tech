import { Component } from '@angular/core';
// Подключение Bootstrap стилей
import '../vendor.scss';
// Подключение стилей для модального окна
import '../vendor.less';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [require('./app.component.css').toString()]
})
export class AppComponent {
  name = 'app';
}
