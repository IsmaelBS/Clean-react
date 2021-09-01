export type HttpPostClientParams = {
  url: string
}

export interface HttpPostClient {
  post (httpPostClientParams: HttpPostClientParams): Promise<void>
}
