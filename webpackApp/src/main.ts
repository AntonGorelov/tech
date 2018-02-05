import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';

//import "./vendor";
//import {NgbModule} from '@ng2-bootstrap/ng2-bootstrap';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
