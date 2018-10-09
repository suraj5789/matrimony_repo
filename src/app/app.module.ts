import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LoginModule } from './login';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { UiModule } from './ui';
import { MatrimonyModule } from './matrimony';
import { AppCommonModule } from './common';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    UiModule,
    MatrimonyModule,
    AppCommonModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
