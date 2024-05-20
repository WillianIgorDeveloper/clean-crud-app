import type { Information } from "@/models/core/entities"

export type IReadInformationProps = {
  search?: string
}

export type IReadInformationResponse = {
  information: Information[]
}

export interface IReadInformation {
  execute(props: IReadInformationProps): Promise<IReadInformationResponse>
}
