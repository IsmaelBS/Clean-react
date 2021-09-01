export type HttpPostClientParams = {
  url: string
  body?: object
}

export interface HttpPostClient {
  post (httpPostClientParams: HttpPostClientParams): Promise<void>
}
