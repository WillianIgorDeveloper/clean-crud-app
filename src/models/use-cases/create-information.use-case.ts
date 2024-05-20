import type { Information } from "@/models/core/entities"
import { HttpStatusCode, type IHttpClient } from "@/models/core/providers"
import { UnauthorizedError, UnexpectedError } from "@/models/core/errors"
import type {
  ICreateInformation,
  ICreateInformationProps,
  ICreateInformationResponse,
} from "@/models/core/use-cases"

type CreateInformationApiResponse = {
  newInformation: Information
}

export class CreateInformation implements ICreateInformation {
  constructor(
    private readonly httpClient: IHttpClient<CreateInformationApiResponse>,
  ) {}

  async execute(
    props: ICreateInformationProps,
  ): Promise<ICreateInformationResponse> {
    const { description, title } = props

    const httpResponse = await this.httpClient.execute({
      url: "/createInformation",
      method: "POST",
      body: { description, title },
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
