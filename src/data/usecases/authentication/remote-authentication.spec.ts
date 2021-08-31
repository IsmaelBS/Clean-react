import HttpPostClient from 'data/protocols/http/http-post-client'
import RemoteAuthentication from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('Should call HttpClient with correct URL', async () => {
    class HttpClientSpy implements HttpPostClient {
      url?: string

      async post(url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }

    const url = ''
    const httpPostClient = new HttpClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClient)
    await sut.auth()
    expect(httpPostClient.url).toBe(url)
  })
})
