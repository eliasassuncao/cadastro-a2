import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ClientsService } from '../services/clients.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component ({
    moduleId: module.id,
    selector: 'contact', 
    templateUrl: './contact.component.html'
})
export class ContactComponent {

    constructor() {

    }

    send(event) {
        event.preventDefault();
        var formData = $("#emailForm").serialize();
        $("#msg").text("Email sendo enviado, espere um momento...");
        $.ajax({
            url: 'http://localhost:4200/send',
            type:'POST',
            data: formData,
                success: function(result) {
                    $("#msg").empty().text(result);
                    console.log(formData);
                    console.log("sucesso no componente"); 
                },
                error: function(error) {
                    $("#msg").empty().text("Erro ao enviar o email: " + error.status + ", Error mensagem:" + error.statusText);
                    console.log("erro no componente");
                },
            dataType:"html",
            timeout: 60000

        });
    
    }
}