import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { RegisterComponent } from './register/register.component';
import { ListingComponent } from './listing/listing.component';
import { routing } from './app.routes';

@NgModule({
  imports:      [ BrowserModule, HttpModule, routing ],
  declarations: [ AppComponent, RegisterComponent, ListingComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }