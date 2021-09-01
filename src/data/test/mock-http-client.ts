import { HttpPostClient, HttpPostClientParams } from '../protocols/http/http-post-client'
export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object

  async post(httpPostClientParams: HttpPostClientParams): Promise<void> {
    this.url = httpPostClientParams.url
    this.body = httpPostClientParams.body
    return Promise.resolve()
  }
}
