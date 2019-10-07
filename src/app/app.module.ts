import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './components/person/person.component';
import { MenuComponent } from './components/menu/menu.component';

import { UpdateComponent } from './components/update/update.component';
import { PersonaddComponent } from './components/personadd/personadd.component';
import { PersonsearchComponent } from './components/personsearch/personsearch.component';




@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    MenuComponent,
    UpdateComponent,
    PersonaddComponent,
    PersonsearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
