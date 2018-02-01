import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { RegisterComponent } from './register/register.component';
import { routing } from './app.routes';
import { ListingModule } from './listing/listing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ BrowserModule,
             HttpModule,
             routing,
             ListingModule,
             FormsModule
           ],
  declarations: [ AppComponent, RegisterComponent, RegisterComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }