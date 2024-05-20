import { HttpStatusCode, type IHttpClient } from "@/models/core/providers"
import { UnauthorizedError, UnexpectedError } from "@/models/core/errors"
import type {
  IDeleteInformation,
  IDeleteInformationProps,
} from "@/models/core/use-cases"

export class DeleteInformation implements IDeleteInformation {
  constructor(private readonly httpClient: IHttpClient<void>) {}

  async execute(props: IDeleteInformationProps): Promise<void> {
    const { informationID } = props

    const httpResponse = await this.httpClient.execute({
      url: "/deleteInformation",
      method: "DELETE",
      params: [informationID],
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return

      case HttpStatusCode.unauthorized:
        throw new UnauthorizedError()

      default:
        throw new UnexpectedError()
    }
  }
}
