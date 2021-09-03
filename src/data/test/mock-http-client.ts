import { HttpPostClient, HttpPostClientParams, HttpResponse, HttpStatusCode } from '@/data/protocols/http'
export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string
  body?: T
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post (httpPostClientParams: HttpPostClientParams<T>): Promise<HttpResponse<R>> {
    this.url = httpPostClientParams.url
    this.body = httpPostClientParams.body
    return Promise.resolve(this.response)
  }
}
