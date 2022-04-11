import { mockAccountModel } from '@/../tests/domain/test'
import { AccountModel } from '@/domain/models'
import { AddAccount, AddAccountParams } from '@/domain/usecases'

export class AddAccountSpy implements AddAccount {
  params: AddAccountParams
  callsCount = 0
  account = mockAccountModel()
  async add (params: AddAccountParams): Promise<AccountModel> {
    this.params = params
    this.callsCount++
    return this.account
  }
}
