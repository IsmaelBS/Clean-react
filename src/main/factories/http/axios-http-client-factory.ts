import { AxiosHttpClient } from '@/infra/http/http-client/axios-http-client'

export const makeAxiosHttpClient = (): AxiosHttpClient => new AxiosHttpClient()
