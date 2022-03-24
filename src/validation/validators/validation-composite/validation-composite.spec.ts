import { FieldValidationSpy } from '@/validation/mocks/field-validation-spy'
import { ValidationComposite } from '@/validation/validators/validation-composite/validation-composite'

describe('Validation Composite', () => {
  it('Should return falsy if validation fails', () => {
    const fieldValidation1 = new FieldValidationSpy('any_field')
    const fieldValidation2 = new FieldValidationSpy('any_field')
    fieldValidation2.error = new Error('error')
    const composite = new ValidationComposite([
      fieldValidation1,
      fieldValidation2
    ])
    const error = composite.validate('any_field', 'any_value')

    expect(error).toBe('error')
  })
})
