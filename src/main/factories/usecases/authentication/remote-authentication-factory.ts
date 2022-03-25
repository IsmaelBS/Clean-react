import { RemoteAuthentication } from '@/data/usecases/authentication'
import { Authentication } from '@/domain/usecases'
import { makeAxiosHttpClient } from '@/main/factories/http/axios-http-client-factory'
import { makeApiFactory } from '@/main/factories/http/make-api-factory'

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(makeApiFactory(), makeAxiosHttpClient())
}
