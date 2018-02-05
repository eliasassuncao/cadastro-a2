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
            genero: ['', Validators.compose(
                [Validators.required, Validators.minLength(8), Validators.maxLength(9)]
            ) ],
            cpf: ['', Validators.compose(
                [Validators.required, Validators.minLength(14), Validators.maxLength(14)]
            )],
            ddn: ['', Validators.compose(
                [Validators.required, Validators.minLength(10), Validators.maxLength(10)]
            ) ],
            telefone: ['', Validators.compose(
                [Validators.required, Validators.minLength(14), Validators.maxLength(14)]
            )]
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