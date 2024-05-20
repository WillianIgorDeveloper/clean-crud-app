import type { IReadInformationProps } from "@/models/core/use-cases"
import { FetchHttpClient } from "@/models/providers"
import { ReadInformation } from "@/models/use-cases"

export function readInformationFactory(props: IReadInformationProps) {
  const httpClient = new FetchHttpClient()
  const readInformation = new ReadInformation(httpClient).execute(props)
  return readInformation
}
