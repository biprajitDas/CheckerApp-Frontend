import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckerComponent } from './checker/checker.component';
import { UserDetailsComponent } from './checker/user-details/user-details.component';
import { Maker1Component } from './maker1/maker1.component';
import { Maker2Component } from './maker2/maker2.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'maker1',
    pathMatch: 'full'
  },
  {
    path: 'maker1',
    component: Maker1Component
  }, {
    path: 'maker2',
    component: Maker2Component
  },
  {
    path: 'checker',
    component: CheckerComponent
  },
  {
    path: 'checker/:id',
    component: UserDetailsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
