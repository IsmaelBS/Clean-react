import React from 'react'
import { render, screen } from '@testing-library/react'
import Input from './input'
import Context from '@/presentation/context/form/form-context'
describe('Input Component', () => {
  test('Should begin with readOnly', () => {
    render(
      <Context.Provider value={{ state: {} }}>
        <Input name='field' />
      </Context.Provider>
    )
    const input = screen.getByTestId('field') as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })
})
