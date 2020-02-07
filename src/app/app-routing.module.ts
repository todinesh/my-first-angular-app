import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SurveyComponent} from './component/survey/survey.component';
import {DefaultComponent} from './component/default.component';

export const appRoutes: Routes = [
{path:'survey', component: SurveyComponent},
{path:'**', component: DefaultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{useHash: false})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
