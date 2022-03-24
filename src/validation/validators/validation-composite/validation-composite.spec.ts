import { FieldValidationSpy } from '@/validation/mocks/field-validation-spy'
import { ValidationComposite } from '@/validation/validators/validation-composite/validation-composite'

describe('Validation Composite', () => {
  it('Should return falsy if validation fails', () => {
    const fieldValidation1 = new FieldValidationSpy('any_field')
    fieldValidation1.error = new Error('first error')
    const fieldValidation2 = new FieldValidationSpy('any_field')
    fieldValidation2.error = new Error('second_error')
    const sut = new ValidationComposite([
      fieldValidation1,
      fieldValidation2
    ])
    const error = sut.validate('any_field', 'any_value')

    expect(error).toBe('first error')
  })
})
