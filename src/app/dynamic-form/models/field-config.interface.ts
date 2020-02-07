import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
  disabled?: boolean,
  label?: string,
  name: string,
  options?: string[],
  placeholder?: string,
  type: string,
  visibleIf?: string,
  validation?: ValidatorFn[],
  value?: any
}
