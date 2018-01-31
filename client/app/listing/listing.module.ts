import { NgModule } from '@angular/core';
import { ListingComponent } from './listing.component';
import { FilterClient } from './listing.pipes';
import  { CommonModule } from '@angular/common';


@NgModule({
    imports: [ CommonModule ],
    declarations: [ ListingComponent, FilterClient ],
    exports: [ ListingComponent ]
})
export class ListingModule{}