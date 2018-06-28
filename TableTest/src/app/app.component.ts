import { Component } from '@angular/core';
// Подключение Bootstrap стилей
import '../vendor.scss';
// Подключение стилей для модального окна
import '../vendor.less';
import { InMemoryDataService } from './in-memory-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [require('./app.component.css').toString()],
  providers: [InMemoryDataService]
})
export class AppComponent {
  name = 'app';

}
