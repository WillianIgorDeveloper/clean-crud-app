import type { Information } from "@/models/core/entities"
import { HttpStatusCode, type IHttpClient } from "@/models/core/providers"
import { UnauthorizedError, UnexpectedError } from "@/models/core/errors"
import type {
  IUpdateInformation,
  IUpdateInformationProps,
  IUpdateInformationResponse,
} from "@/models/core/use-cases"

type UpdateInformationApiResponse = {
  updatedInformation: Information
}

export class UpdateInformation implements IUpdateInformation {
  constructor(
    private readonly httpClient: IHttpClient<UpdateInformationApiResponse>,
  ) {}

  async execute(
    props: IUpdateInformationProps,
  ): Promise<IUpdateInformationResponse> {
    const { information } = props

    const httpResponse = await this.httpClient.execute({
      url: "/updateInformation",
      method: "PUT",
      body: { information },
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
