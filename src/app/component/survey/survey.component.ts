import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { SurveyConfig } from './survey.config';
import { SurveyMockData } from './survey.mockdata';
import { FieldConfig } from '../../dynamic-form/models/field-config.interface';
import { DynamicFormComponent } from '../../dynamic-form/containers/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: []
})
export class SurveyComponent implements AfterViewInit {
  @ViewChild(DynamicFormComponent, {static:false}) form: DynamicFormComponent;

  config: FieldConfig[] = SurveyConfig;
  //data: () = SurveyMockData;
  isLoading: boolean;

  ngAfterViewInit() {
    this.isLoading = true;
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);
    this.form.setValue('name', '');
    this.isLoading = false;
  }

  submit(value: {[name: string]: any}) {
    console.log("submitted:"+value);
  }

  isHidden(visibleIf:String){
    const str = visibleIf.split(' ');
    const str1 = str[0];
    const str2 = str[2];
    if (this.form.form.contains(str1) && str1===str2) return false;
    return true;
  }
}