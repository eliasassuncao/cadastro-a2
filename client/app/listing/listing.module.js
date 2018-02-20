"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var listing_component_1 = require("./listing.component");
var listing_pipes_cpf_1 = require("./listing.pipes.cpf");
var listing_pipes_1 = require("./listing.pipes");
var common_1 = require("@angular/common");
var clients_service_1 = require("../services/clients.service");
var app_routes_1 = require("../app.routes");
var ListingModule = /** @class */ (function () {
    function ListingModule() {
    }
    ListingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, app_routes_1.routing],
            declarations: [listing_component_1.ListingComponent, listing_pipes_1.FilterClient, listing_pipes_cpf_1.CpfPipe],
            exports: [listing_component_1.ListingComponent],
            providers: [clients_service_1.ClientsService]
        })
    ], ListingModule);
    return ListingModule;
}());
exports.ListingModule = ListingModule;
//# sourceMappingURL=listing.module.js.map