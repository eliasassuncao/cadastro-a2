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
var clients_service_1 = require("../services/clients.service");
var ListingComponent = /** @class */ (function () {
    function ListingComponent(service) {
        var _this = this;
        this.clients = [];
        this.message = '';
        this.service = service;
        service.list()
            .subscribe(function (clients) {
            _this.clients = clients;
        }, function (error) { return console.log(error); });
    }
    ListingComponent.prototype.remove = function (client, trClient) {
        var _this = this;
        if (confirm('Deseja remover este cliente?')) {
            $(trClient).fadeOut(1500);
            setTimeout(function () {
                _this.service
                    .remove(client)
                    .subscribe(function () {
                    var newClients = _this.clients.slice(0);
                    var index = newClients.indexOf(client);
                    newClients.splice(index, 1);
                    _this.clients = newClients;
                    _this.message = 'Cliente removido com sucesso';
                }, function (error) {
                    console.log(error);
                    _this.message = 'Não foi possivel remover o cliente';
                });
            }, 1500);
        }
    };
    ListingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'listing',
            templateUrl: './listing.component.html',
        }),
        __metadata("design:paramtypes", [clients_service_1.ClientsService])
    ], ListingComponent);
    return ListingComponent;
}());
exports.ListingComponent = ListingComponent;
//# sourceMappingURL=listing.component.js.map