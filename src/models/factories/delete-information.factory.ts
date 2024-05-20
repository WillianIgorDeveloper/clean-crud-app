import type { IDeleteInformationProps } from "@/models/core/use-cases"
import { FetchHttpClient } from "@/models/providers"
import { DeleteInformation } from "@/models/use-cases"

export function deleteInformationFactory(props: IDeleteInformationProps) {
  const httpClient = new FetchHttpClient()
  const deleteInformation = new DeleteInformation(httpClient).execute(props)
  return deleteInformation
}
