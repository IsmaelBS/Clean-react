import React, { useContext, useRef } from 'react'
import Styles from './input-styles.scss'
import Context from '@/presentation/context/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props) => {
  const { state, setState } = useContext(Context)
  const error = state[`${props.name}Error`]
  const inputRef = useRef<HTMLInputElement>()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const enabledInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  return (
    <div
      data-testid={`${props.name}-wrap`}
      className={Styles.inputWrap}
      data-status={ error ? 'invalid' : 'valid' }
    >
      <input
        {...props}
        ref={inputRef}
        placeholder=" "
        title={error}
        data-testid={props.name}
        readOnly
        onFocus={ enabledInput }
        onChange={ handleChange }
      />
      <label
        data-testid={`${props.name}-label`}
        htmlFor={props.name}
        title={error}
        onClick={() => inputRef.current.focus()}
      >
        { props.placeholder }
      </label>
    </div>
  )
}

export default Input
