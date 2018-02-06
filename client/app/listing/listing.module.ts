import { NgModule } from '@angular/core';
import { ListingComponent } from './listing.component';
import { FilterClient } from './listing.pipes';
import  { CommonModule } from '@angular/common';
import { ClientsService } from '../services/clients.service';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ ListingComponent, FilterClient ],
    exports: [ ListingComponent ],
    providers: [ ClientsService ]
})
export class ListingModule{ }