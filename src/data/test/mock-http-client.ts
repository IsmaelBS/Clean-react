import { HttpPostClient, HttpPostClientParams } from '@/data/protocols/http/http-post-client'
import { HttpResponse, HttpStatusCode } from '@/data/protocols/http/http-response'
export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object
  response: HttpResponse = {
    statusCode: HttpStatusCode.noContent
  }

  async post (httpPostClientParams: HttpPostClientParams): Promise<HttpResponse> {
    this.url = httpPostClientParams.url
    this.body = httpPostClientParams.body
    return Promise.resolve(this.response)
  }
}
