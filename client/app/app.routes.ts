import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ListingComponent} from './listing/listing.component';

const appRoutes: Routes = [

    { path: '', component: ListingComponent },
    { path: 'cadastro', component: RegisterComponent },
    { path: '**', redirectTo: ''}  
];

export const routing = RouterModule.forRoot(appRoutes);