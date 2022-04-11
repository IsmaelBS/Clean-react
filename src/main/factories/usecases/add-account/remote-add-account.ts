import { RemoteAddAccount } from '@/data/usecases/add-account/remote-add-account'
import { AddAccount } from '@/domain/usecases'
import { makeAxiosHttpClient } from '@/main/factories/http/axios-http-client-factory'
import { makeApiFactory } from '@/main/factories/http/make-api-factory'

export const makeRemoteAddAccount = (): AddAccount => {
  return new RemoteAddAccount(makeApiFactory('/signup'), makeAxiosHttpClient())
}
