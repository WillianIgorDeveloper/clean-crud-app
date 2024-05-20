import type { IReadInformationProps } from "@/models/core/use-cases"
import { readInformationFactory } from "@/models/factories"
import { useQuery } from "@tanstack/react-query"

export function useReadInformation(props: IReadInformationProps) {
  return useQuery({
    queryKey: ["information", props],
    queryFn: () => readInformationFactory(props),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}
