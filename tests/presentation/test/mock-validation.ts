import { Validation } from '@/presentation/protocols/validation'

export class ValidationStub implements Validation {
  errorMessage: string

  validate (fieldName: string, _input: object): string {
    const error = `${fieldName}`
    return this.errorMessage
  }
}
