"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(http) {
        this.client = {
            nome: '',
            genero: '',
            cpf: '',
            ddn: '',
            telefone: ''
        };
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
    RegisterComponent.prototype.register = function (event) {
        event.preventDefault();
        console.log(this.client);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register',
            templateUrl: './register.component.html'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map