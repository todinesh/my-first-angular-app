import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Field } from '../models/field.interface';
import { FieldConfig } from '../models/field-config.interface';
@Component({
  selector: 'app-radiobutton',
  template: `
  <div 
  class="dynamic-field radio" 
  [formGroup]="group">
    <label>{{ config.label }}</label>
    <div *ngFor="let option of config.options" class="dynamic-field radio" [formGroup]="group">
      <input [formControlName]="config.name" [type]="config.type" [name]="config.name" [value]="option">
      <label [for]="config.name">{{option}}</label>
    </div>
  </div>
`,
  styles: []
})
export class RadioComponent implements OnInit {
  config: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
