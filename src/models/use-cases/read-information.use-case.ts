import { HttpStatusCode, type IHttpClient } from "@/models/core/providers"
import { UnauthorizedError, UnexpectedError } from "@/models/core/errors"
import type { Information } from "@/models/core/entities"
import type {
  IReadInformationResponse,
  IReadInformation,
  IReadInformationProps,
} from "@/models/core/use-cases"

type ReadInformationApiResponse = {
  information: Information[]
}

export class ReadInformation implements IReadInformation {
  constructor(
    private readonly httpClient: IHttpClient<ReadInformationApiResponse>,
  ) {}

  async execute(props: IReadInformationProps): Promise<IReadInformationResponse> {
    console.log(props)

    const httpResponse = await this.httpClient.execute({
      url: "/readInformation",
      method: "GET",
      query: props,
    })

    if (!httpResponse.body) throw new UnexpectedError()

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body

      case HttpStatusCode.unauthorized:
        throw new UnauthorizedError()

      default:
        throw new UnexpectedError()
    }
  }
}
