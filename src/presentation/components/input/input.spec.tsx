import React from 'react'
import { render, screen } from '@testing-library/react'
import Input from './input'
import Context from '@/presentation/context/form/form-context'

const makeSut = (fieldName: string): HTMLElement => {
  render(
    <Context.Provider value={{ state: {} }}>
      <Input name={fieldName} />
    </Context.Provider>
  )
  return screen.getByTestId(fieldName)
}
describe('Input Component', () => {
  test('Should begin with readOnly', () => {
    const sut = makeSut('field') as HTMLInputElement
    expect(sut.readOnly).toBe(true)
  })
})
