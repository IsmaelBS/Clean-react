import { FieldValidation } from '@/validation/protocols/field-validation'

export class FieldValidationSpy implements FieldValidation {
  field: string;
  value: string
  error: Error = null;
  constructor (field: string) {
    this.field = field
  }

  validate (value: string): Error {
    this.value = value
    return this.error
  }
}
