import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientsService } from '../services/clients.service';

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
    service: ClientsService;

    constructor(service: ClientsService, fb: FormBuilder){
        this.service = service;

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

        this.service
            .registerService(this.client)
            .subscribe(() => {
                console.log("Cliente cadastrado com sucesso");
                this.client = new Object();
            }, error => console.log(error));

    }  
}