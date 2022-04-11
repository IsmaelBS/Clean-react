import { FieldValidation } from '@/validation/protocols/field-validation'

export class FieldValidationSpy implements FieldValidation {
  field: string
  value: string
  error: Error = null
  constructor (field: string) {
    this.field = field
  }

  validate (input: object): Error {
    this.value = input[this.field]
    return this.error
  }
}
