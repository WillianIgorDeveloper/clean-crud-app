import type { Information } from "@/models/core/entities"

export type ICreateInformationProps = {
  title: string
  description: string
}

export type ICreateInformationResponse = {
  newInformation: Information
}

export interface ICreateInformation {
  execute(props: ICreateInformationProps): Promise<ICreateInformationResponse>
}
