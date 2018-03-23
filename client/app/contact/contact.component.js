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
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.send = function (event) {
        event.preventDefault();
        var formData = $("#emailForm").serialize();
        $("#msg").text("Email sendo enviado, espere um momento...");
        $.ajax({
            url: 'http://localhost:4200/send',
            type: 'POST',
            data: formData,
            success: function (result) {
                $("#msg").empty().text(result);
                console.log(formData);
                console.log("sucesso no componente");
            },
            error: function (error) {
                $("#msg").empty().text("Erro ao enviar o email: " + error.status + ", Error mensagem:" + error.statusText);
                console.log("erro no componente");
            },
            dataType: "html",
            timeout: 60000
        });
    };
    ContactComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contact',
            templateUrl: './contact.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map