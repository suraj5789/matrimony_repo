import { RegisterComponent, LoginComponent } from './login';
import { MatrimonyComponent } from './matrimony';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'matrimony', component: MatrimonyComponent },
    { path: '**', pathMatch:'full', redirectTo: 'matrimony' }
];
