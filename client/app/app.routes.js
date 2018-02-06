"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var register_component_1 = require("./register/register.component");
var listing_component_1 = require("./listing/listing.component");
var appRoutes = [
    { path: '', component: listing_component_1.ListingComponent },
    { path: 'cadastro/:id', component: register_component_1.RegisterComponent },
    { path: 'cadastro', component: register_component_1.RegisterComponent },
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map