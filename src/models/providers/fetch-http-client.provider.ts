import type {
  IHttpClient,
  IHttpClientProps,
  IHttpClientResponse,
} from "@/models/core/providers"

export class FetchHttpClient implements IHttpClient {
  async execute(props: IHttpClientProps): Promise<IHttpClientResponse> {
    let response: IHttpClientResponse

    try {
      const { url, method, body, headers, params, query } = props

      const apiURL = import.meta.env.VITE_API_URL
      const parameters = params ? `/${params.join("/")}` : ""
      const queries = query ? `?${new URLSearchParams(query)}` : ""
      const requestUrl = `${apiURL}${url}${parameters}${queries}`

      const fetchResult = await fetch(requestUrl, {
        method: method,
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      })

      const resultData = await fetchResult.json()

      response = {
        statusCode: fetchResult.status,
        body: resultData,
      }
    } catch (error: any) {
      console.log(error)
      response = error.response
    }

    return {
      statusCode: response?.statusCode,
      body: response?.body,
    }
  }
}
