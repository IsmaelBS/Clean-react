import { HttpResponse } from './http-response'

export type HttpPostClientParams = {
  url: string
  body?: object
}

export interface HttpPostClient {
  post (httpPostClientParams: HttpPostClientParams): Promise<HttpResponse>
}
