import {
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table as UITable,
} from "@/presentation/components/ui/table"
import { Delete } from "./delete"
import { Edit } from "./edit"
import { useReadInformation } from "@/presentation/hooks/state-manager/information"
import { useInformationTableContext } from "./context"

export function Table() {
  const { search } = useInformationTableContext()

  const { data, isLoading, isError, isFetching } = useReadInformation({ search })

  return (
    <UITable>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead className="text-right">Content</TableHead>
          <TableHead className="text-right">Edit</TableHead>
          <TableHead className="text-right">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {isLoading && (
          <TableRow>
            <TableCell colSpan={4} className="text-center py-6 animate-pulse">
              Loading...
            </TableCell>
          </TableRow>
        )}
        {!isLoading && data?.information?.length === 0 && (
          <TableRow>
            <TableCell colSpan={4} className="text-center py-6">
              No information found.
            </TableCell>
          </TableRow>
        )}
        {isError && (
          <TableRow>
            <TableCell colSpan={4} className="text-center py-6 text-destructive">
              An error occurred.
            </TableCell>
          </TableRow>
        )}
        {data?.information?.map((information) => (
          <TableRow
            key={information.id}
            data-loading={isFetching}
            className="data-[loading=true]:animate-pulse"
          >
            <TableCell className="font-medium">{information.title}</TableCell>
            <TableCell className="text-right">{information.description}</TableCell>
            <TableCell className="text-right">
              <Edit information={information} />
            </TableCell>
            <TableCell className="text-right">
              <Delete information={information} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </UITable>
  )
}
