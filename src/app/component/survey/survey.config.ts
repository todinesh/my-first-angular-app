import { Validators } from '@angular/forms';
import { FieldConfig } from '../../dynamic-form/models/field-config.interface';

export const SurveyConfig: FieldConfig[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'Q1',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'radio',
      label: 'Do you like food',
      name: 'Q2',
      options: ['Yes', 'No'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      type: 'select',
      label: 'What is your Favourite Food',
      name: 'Q3',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'What is your Favourite Food',
      visibleIf: 'Q2 = Yes'
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];