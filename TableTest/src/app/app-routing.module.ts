import { NgModule } from '@angular/core';
import { AppComponent} from './app.component';
import { NgTableComponent} from './table/table.component';
import { RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
    {   path: '',
        redirectTo: '/table',
        pathMatch: 'full'
    },
    {
        path: 'table',
        component: NgTableComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule { }