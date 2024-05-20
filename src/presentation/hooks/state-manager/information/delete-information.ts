import { deleteInformationFactory } from "@/models/factories"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useDeleteInformation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteInformationFactory,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["information"],
      })
    },
  })
}
