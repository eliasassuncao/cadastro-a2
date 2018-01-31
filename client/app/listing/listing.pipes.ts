import { Pipe, PipeTransform } from '@angular/core';
import { ListingComponent } from './listing.component';

@Pipe({
  name: 'filterClient'  
})
export class FilterClient implements PipeTransform { 
    
    transform(clients: ListingComponent[], searching: string): ListingComponent[] {
        let filtro: string = searching ? searching.toLocaleLowerCase(): '';
        return filtro ? clients.filter(client => client.nome.toLocaleLowerCase().indexOf(filtro) != -1) 
        : clients;
    }
}