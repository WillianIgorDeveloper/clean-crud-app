import type { Information } from "@/models/core/entities"

export type IUpdateInformationProps = {
  information: Information
}

export type IUpdateInformationResponse = {
  updatedInformation: Information
}

export interface IUpdateInformation {
  execute(props: IUpdateInformationProps): Promise<IUpdateInformationResponse>
}
