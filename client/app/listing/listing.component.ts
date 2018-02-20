import { Component } from '@angular/core';
import { ClientsService } from '../services/clients.service';

@Component({
    moduleId: module.id,
    selector: 'listing',
    templateUrl: './listing.component.html',
})

export class ListingComponent{

    clients: Object[] = [];
    service: ClientsService;
    message: string = '';

    constructor(service: ClientsService){

        this.service = service;
        service.list()
            .subscribe(clients => {
                this.clients = clients;
            }, error => console.log(error));

    }

    remove(client, trClient){

        if(confirm('Deseja remover este cliente?')){
            $(trClient).fadeOut(1500);
            setTimeout(() => {
                this.service
                .remove(client)
                .subscribe(
                    () => { 
                    let newClients = this.clients.slice(0); 
                    let index = newClients.indexOf(client);
                    newClients.splice(index, 1);
                    this.clients = newClients;
                    this.message = 'Cliente removido com sucesso';
                    },
                    error => {
                        console.log(error);
                        this.message = 'Não foi possivel remover o cliente';
                    }
                );
            }, 1500);
        }

    }
}

