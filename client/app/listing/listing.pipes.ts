import { Pipe, PipeTransform } from '@angular/core';
import { ListingComponent } from './listing.component';

@Pipe({
  name: 'filterClient'  
})
export class FilterClient implements PipeTransform { 
    
    transform(clients: ListingComponent[], searching: string): ListingComponent[] {
      //  return clients.filter( client => client.nome.toLowerCase().includes(searching));
        return clients.filter( function(client) { 

            let valueReturn : boolean = false;
            
            if(client.nome.toLowerCase().includes(searching.toLowerCase())){
                valueReturn = true;
                return valueReturn;
             } 

             if(client.cpf.toString().toLowerCase().includes(searching.toLowerCase())){
                valueReturn = true;
                return valueReturn;
             } 
            
           return valueReturn;
        });
    }
}