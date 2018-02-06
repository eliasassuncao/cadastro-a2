import { Component } from '@angular/core';
import { ClientsService } from '../services/clients.service';

@Component({
    moduleId: module.id,
    selector: 'listing',
    templateUrl: './listing.component.html',
})

export class ListingComponent{

    clients: Object[] = [];

    constructor(service: ClientsService){
        service.list()
            .subscribe(clients => {
                this.clients = clients;
            }, error => console.log(error));

    }
}

/*     constructor(http: Http){

        http.get('/v1/data')
            .map(res => res.json())
            .subscribe( clients => {
                this.clients = clients;
                //console.log(clients);
        }, error => console.log(error));
    } */