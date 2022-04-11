import { HttpResponse } from '.'

export type HttpPostClientParams<T> = {
  url: string
  body?: T
}

export interface HttpPostClient<T, R> {
  post: (httpPostClientParams: HttpPostClientParams<T>) => Promise<HttpResponse<R>>
}
