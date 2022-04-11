import React from 'react'
import { SignUp } from '@/presentation/pages'
import { makeSignUpValidation } from '@/main/factories/pages/signup/signup-validation-factory'
import { makeLocalSaveAccessToken } from '@/main/factories/usecases/storage/local-save-access-token-factory'
import { makeRemoteAddAccount } from '@/main/factories/usecases/add-account/remote-add-account'

export const makeSignUp: React.FC = () => {
  return (<SignUp
    validation={makeSignUpValidation()}
    saveAccessToken={makeLocalSaveAccessToken()}
    addAccount={makeRemoteAddAccount()}
  />)
}
