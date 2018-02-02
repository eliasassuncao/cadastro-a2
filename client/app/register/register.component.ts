import { Component } from '@angular/core';
import { ListingComponent } from '../listing/listing.component';
import { Http, Headers } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    myForm: FormGroup;

    constructor(http: Http, fb: FormBuilder){
        this.http = http;

        this.myForm = fb.group({
            nome: ['', Validators.compose(
                [Validators.required, Validators.minLength(3), Validators.maxLength(35)]
            )],
            genero: ['', ],
            cpf: ['', ],
            ddn: ['', ],
            telefone: ['', ]
        });
    }

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
    } 
}