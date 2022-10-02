import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AgePipe } from './Pipes/age.pipe';
import { CityPipe } from './Pipes/city.pipe';
import { PersonsComponent } from './persons/persons.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './Pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AgePipe,
    CityPipe,
    PersonsComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
