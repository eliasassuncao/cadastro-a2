import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { routing } from './app.routes';
import { ListingModule } from './listing/listing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ BrowserModule,
             HttpModule,
             routing,
             ListingModule,
             FormsModule,
             ReactiveFormsModule,
           ],
  declarations: [ AppComponent, RegisterComponent, RegisterComponent, ContactComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }