import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listing',
    templateUrl: './listing.component.html',
})

export class ListingComponent{

    clients: Object[] = [];

    constructor(http: Http){

        http.get('/v1/data')
            .map(res => res.json())
            .subscribe( clients => {
                this.clients = clients;
                //console.log(clients);
        }, error => console.log(error));
    }
}