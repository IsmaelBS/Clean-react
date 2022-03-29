import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Context from '@/presentation/context/form/form-context'
import { Input } from '@/presentation/components'
import faker from 'faker'

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
    const field = faker.database.column()
    const sut = makeSut(field) as HTMLInputElement
    expect(sut.readOnly).toBe(true)
  })

  test('Should remove readOnly on focus', () => {
    const field = faker.database.column()
    const sut = makeSut(field) as HTMLInputElement
    fireEvent.focus(sut)
    expect(sut.readOnly).toBe(false)
  })
})
