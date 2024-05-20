import { updateInformationFactory } from "@/models/factories"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useUpdateInformation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateInformationFactory,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["information"],
      })
    },
  })
}
