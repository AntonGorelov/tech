import { BrowserModule }     from '@angular/platform-browser';
import { NgModule }          from '@angular/core';
import { HttpClientModule }  from '@angular/common/http';
import { HttpModule}         from '@angular/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }      from './app.component';
import { RouterModule }      from '@angular/router';
import { AppRoutingModule }  from './app-routing.module';
import { FormsModule }       from '@angular/forms';

import { NgTableComponent }  from './table/table.component';
import { ItemService }       from './item.service';

import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    NgTableComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(
          InMemoryDataService, { dataEncapsulation: false }
      ),
      AppRoutingModule,
      RouterModule,
      FormsModule,
      HttpModule
  ],
  providers: [RouterModule, HttpModule, ItemService],
  bootstrap: [AppComponent, PaginationComponent]
})
export class AppModule { }
