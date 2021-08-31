import { AccountModel } from '../models/account-model'

type AuthenticationParams = {
  email: string
  password: string
}

export default interface Authentication {
  auth (params: AuthenticationParams): Promise<AccountModel>
}
