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
var forms_1 = require("@angular/forms");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(http, fb) {
        this.client = {
            nome: '',
            genero: '',
            cpf: '',
            ddn: '',
            telefone: ''
        };
        this.http = http;
        this.myForm = fb.group({
            nome: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(35)])],
            genero: ['',],
            cpf: ['',],
            ddn: ['',],
            telefone: ['',]
        });
    }
    RegisterComponent.prototype.register = function (event) {
        var _this = this;
        event.preventDefault();
        console.log(this.client);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http
            .post('/v1/data', JSON.stringify(this.client), { headers: headers })
            .subscribe(function () {
            _this.client = new Object;
            console.log('Foto salva com sucesso');
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register',
            templateUrl: './register.component.html'
        }),
        __metadata("design:paramtypes", [http_1.Http, forms_1.FormBuilder])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map