import { HttpPostClient, HttpPostClientParams, HttpResponse, HttpStatusCode } from '@/data/protocols/http'
import faker from 'faker'

export const mockPostRequest = (): HttpPostClientParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string
  body?: T
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post (httpPostClientParams: HttpPostClientParams<T>): Promise<HttpResponse<R>> {
    this.url = httpPostClientParams.url
    this.body = httpPostClientParams.body
    return this.response
  }
}
