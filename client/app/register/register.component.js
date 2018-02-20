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
var router_1 = require("@angular/router");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(service, fb, route, router) {
        var _this = this;
        this.client = {
            nome: '',
            genero: '',
            cpf: '',
            ddn: '',
            telefone: ''
        };
        this.message = '';
        this.service = service;
        this.route = route;
        this.router = router;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.service
                    .searchForId(id)
                    .subscribe(function (client) { return _this.client = client; }, function (error) { return console.log(error); });
            }
        });
        this.myForm = fb.group({
            nome: ['', forms_1.Validators.compose([])],
            genero: ['', forms_1.Validators.compose([])],
            cpf: ['', forms_1.Validators.compose([])],
            ddn: ['', forms_1.Validators.compose([])],
            telefone: ['', forms_1.Validators.compose([])]
        });
    }
    RegisterComponent.prototype.register = function (event) {
        var _this = this;
        event.preventDefault();
        this.service
            .registerService(this.client)
            .subscribe(function (res) {
            _this.message = res.message;
            _this.client = new Object();
            if (!res.include)
                _this.router.navigate(['']);
        }, function (error) {
            console.log(error);
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register',
            templateUrl: './register.component.html'
        }),
        __metadata("design:paramtypes", [clients_service_1.ClientsService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map