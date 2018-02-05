import { Component } from '@angular/core';
//import { ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  //encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css' /*'././node_modules/bootstrap/dist/css/bootstrap.css'*/]
})
export class AppComponent {
  name = 'Anton';
}
