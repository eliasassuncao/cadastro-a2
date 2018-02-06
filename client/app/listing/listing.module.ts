import { NgModule } from '@angular/core';
import { ListingComponent } from './listing.component';
import { FilterClient } from './listing.pipes';
import  { CommonModule } from '@angular/common';
import { ClientsService } from '../services/clients.service';
import { routing } from '../app.routes';

@NgModule({
    imports: [ CommonModule, routing ],
    declarations: [ ListingComponent, FilterClient ],
    exports: [ ListingComponent ],
    providers: [ ClientsService ]
})
export class ListingModule{ }