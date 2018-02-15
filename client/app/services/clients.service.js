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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var ClientsService = /** @class */ (function () {
    function ClientsService(http) {
        this.url = 'v1/data';
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append('Content-type', 'application/json');
    }
    ClientsService.prototype.list = function () {
        return this.http.get(this.url)
            .map(function (res) { return res.json(); });
    };
    ClientsService.prototype.registerService = function (client) {
        if (client._id) {
            return this.http.put(this.url + '/' + client._id, JSON.stringify(client), { headers: this.headers })
                .map(function () { return new MessageRegister('Cliente alterado com sucesso!', false); });
        }
        else {
            return this.http.post(this.url, JSON.stringify(client), { headers: this.headers })
                .map(function () { return new MessageRegister('Cliente salvo com sucesso!', true); });
        }
    };
    ClientsService.prototype.remove = function (client) {
        return this.http.delete(this.url + '/' + client._id);
    };
    ClientsService.prototype.searchForId = function (id) {
        return this.http.get(this.url + '/' + id).map(function (res) { return res.json(); });
    };
    ClientsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ClientsService);
    return ClientsService;
}());
exports.ClientsService = ClientsService;
var MessageRegister = /** @class */ (function () {
    function MessageRegister(_message, _include) {
        this._message = _message;
        this._include = _include;
        this._message = _message;
        this._include = _include;
    }
    Object.defineProperty(MessageRegister.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MessageRegister.prototype, "include", {
        get: function () {
            return this._include;
        },
        enumerable: true,
        configurable: true
    });
    return MessageRegister;
}());
exports.MessageRegister = MessageRegister;
//# sourceMappingURL=clients.service.js.map