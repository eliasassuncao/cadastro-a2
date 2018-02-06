import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ListingComponent} from './listing/listing.component';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [

    { path: '', component: ListingComponent },
    { path: 'cadastro/:id', component: RegisterComponent },
    { path: 'cadastro', component: RegisterComponent },
    { path: '**', redirectTo: ''}  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);