import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientsService } from '../services/clients.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    message: string = '';
    route: ActivatedRoute;
    router: Router;

    constructor(service: ClientsService, fb: FormBuilder, route: ActivatedRoute, router: Router){

        this.service = service;

        this.route = route;
        this.router = router;

        this.route.params.subscribe(params => {
            let id = params['id'];

            if(id){
                this.service
                .searchForId(id)
                .subscribe(client => this.client = client, error => console.log(error));
            }
            
        });
        
        this.myForm = fb.group({
            nome: ['', Validators.compose(
                []
            )],
            genero: ['', Validators.compose(
                []
            ) ],
            cpf: ['', Validators.compose(
                []
            )],
            ddn: ['', Validators.compose(
                []
            ) ],
            telefone: ['', Validators.compose(
                []
            )]
        });
    }
     
    register(event) {
        event.preventDefault();

        this.service
            .registerService(this.client)
            .subscribe(res => {
                this.message = res.message;
                this.client = new Object();
                if(!res.include) this.router.navigate(['']);
            }, error => {
                console.log(error);
            });

    }  
}