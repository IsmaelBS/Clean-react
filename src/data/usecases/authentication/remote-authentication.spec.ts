import { HttpClientSpy } from '../../test/http-client'
import RemoteAuthentication from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = 'any_url'
    const httpPostClient = new HttpClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClient)
    await sut.auth()
    expect(httpPostClient.url).toBe(url)
  })
})
