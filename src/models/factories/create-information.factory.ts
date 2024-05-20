import { FetchHttpClient } from "@/models/providers"
import type { ICreateInformationProps } from "@/models/core/use-cases"
import { CreateInformation } from "../use-cases/create-information.use-case"

export function createInformationFactory(props: ICreateInformationProps) {
  const httpClient = new FetchHttpClient()
  const createInformation = new CreateInformation(httpClient).execute(props)
  return createInformation
}
