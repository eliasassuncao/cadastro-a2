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
var forms_1 = require("@angular/forms");
var clients_service_1 = require("../services/clients.service");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(service, fb) {
        this.client = {
            nome: '',
            genero: '',
            cpf: '',
            ddn: '',
            telefone: ''
        };
        this.message = '';
        this.service = service;
        this.myForm = fb.group({
            nome: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(35)])],
            genero: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(9)])],
            cpf: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(14), forms_1.Validators.maxLength(14)])],
            ddn: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(10), forms_1.Validators.maxLength(10)])],
            telefone: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(14), forms_1.Validators.maxLength(14)])]
        });
    }
    RegisterComponent.prototype.register = function (event) {
        var _this = this;
        event.preventDefault();
        console.log(this.client);
        this.service
            .registerService(this.client)
            .subscribe(function () {
            _this.message = 'Cliente cadastrado com sucesso';
            _this.client = new Object();
        }, function (error) {
            console.log(error);
            _this.message = 'Não foi possivel cadastrar o cliente';
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register',
            templateUrl: './register.component.html'
        }),
        __metadata("design:paramtypes", [clients_service_1.ClientsService, forms_1.FormBuilder])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map