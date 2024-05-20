import { createInformationFactory } from "@/models/factories/create-information.factory"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useCreateInformation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createInformationFactory,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["information"],
      })
    },
  })
}
