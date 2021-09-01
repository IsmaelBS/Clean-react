import { HttpPostClient, HttpPostClientParams } from '../protocols/http/http-post-client'
export class HttpPostClientSpy implements HttpPostClient {
  url?: string

  async post(httpPostClientParams: HttpPostClientParams): Promise<void> {
    this.url = httpPostClientParams.url
    return Promise.resolve()
  }
}
