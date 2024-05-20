export type IDeleteInformationProps = {
  informationID: string
}

export interface IDeleteInformation {
  execute(props: IDeleteInformationProps): Promise<void>
}
