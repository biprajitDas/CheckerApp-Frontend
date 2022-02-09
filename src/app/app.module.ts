import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Maker1Component } from './maker1/maker1.component';
import { Maker2Component } from './maker2/maker2.component';
import { HomeComponent } from './home/home.component';
import { CheckerComponent } from './checker/checker.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './checker/user-details/user-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoadSpinnerComponent } from './shared/load-spinner/load-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    Maker1Component,
    Maker2Component,
    HomeComponent,
    CheckerComponent,
    UserDetailsComponent,
    LoadSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
