import type { IUpdateInformationProps } from "@/models/core/use-cases"
import { FetchHttpClient } from "@/models/providers"
import { UpdateInformation } from "@/models/use-cases"

export function updateInformationFactory(props: IUpdateInformationProps) {
  const httpClient = new FetchHttpClient()
  const updateInformation = new UpdateInformation(httpClient).execute(props)
  return updateInformation
}
