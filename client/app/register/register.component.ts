import { Component } from '@angular/core';
import { ListingComponent } from '../listing/listing.component';
import { Http, Headers } from '@angular/http';

@Component ({
    moduleId: module.id,
    selector: 'register',
    templateUrl: './register.component.html'
})
export class RegisterComponent {

    client: Object = {
        nome: '',
        genero: '',
        cpf: '',
        ddn: '',
        telefone: ''
    };
    http: Http;

    constructor(http: Http){
        this.http = http;
    }

    /*
    register(event) {
        event.preventDefault();
        console.log(this.client);

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http
            .post('/v1/data', JSON.stringify(this.client) ,{ headers: headers} )
            .subscribe( () => {
                this.client = new Object;
                console.log('Foto salva com sucesso');
            });
    } */

    register(event) {
        event.preventDefault();
        console.log(this.client);
    }



}