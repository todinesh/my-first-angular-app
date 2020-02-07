import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MaterialModule} from "./material.module";
import {AppRoutingModule} from './app-routing.module';
import {DefaultComponent} from './component/default.component';
import {DynamicFormModule} from './dynamic-form/dynamic-form.module';
import {SurveyComponent} from './component/survey/survey.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    DynamicFormModule
  ],
  exports: [MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
