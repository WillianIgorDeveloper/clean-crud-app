export type IHttpClientProps = {
  url: string
  method: "POST" | "GET" | "PUT" | "DELETE" | "PATCH"
  headers?: any
  params?: string[]
  query?: any
  body?: any
}

export type IHttpClientResponse<T = any> = {
  statusCode: HttpStatusCode
  body?: T
}

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}

export interface IHttpClient<T = any> {
  execute(props: IHttpClientProps): Promise<IHttpClientResponse<T>>
}
