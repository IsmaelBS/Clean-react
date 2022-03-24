import { FieldValidationSpy } from '@/validation/mocks/field-validation-spy'
import { ValidationComposite } from '@/validation/validators/validation-composite/validation-composite'

type SutTypes = {
  sut: ValidationComposite
  fieldValidationsSpy: FieldValidationSpy[]
}

const makeSut = (): SutTypes => {
  const fieldValidationsSpy = [
    new FieldValidationSpy('any_field'),
    new FieldValidationSpy('any_field')
  ]
  const sut = new ValidationComposite(fieldValidationsSpy)

  return {
    sut,
    fieldValidationsSpy
  }
}
describe('Validation Composite', () => {
  it('Should return falsy if validation fails', () => {
    const { sut, fieldValidationsSpy } = makeSut()
    fieldValidationsSpy[0].error = new Error('first error')
    fieldValidationsSpy[1].error = new Error('second error')

    const error = sut.validate('any_field', 'any_value')

    expect(error).toBe('first error')
  })
})
