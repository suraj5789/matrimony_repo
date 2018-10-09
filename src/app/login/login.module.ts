import { fakeBackendProvider, ErrorInterceptor, JwtInterceptor } from './../helpers';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RegistrationService } from './services/registration/registration.service';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AlertService } from './../common/services/alert.service';
import { AuthGuard } from './services/authentication/authentication.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports : [LoginComponent, RegisterComponent],
  providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        RegistrationService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
})
export class LoginModule { }
