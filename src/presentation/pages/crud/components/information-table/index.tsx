import { InformationTableContextProvider } from "./context"
import { Create } from "./create"
import { Search } from "./search"
import { Table } from "./table"

export function InformationTable() {
  return (
    <InformationTableContextProvider>
      <div className="space-y-4">
        <div className="flex gap-3 items-center">
          <Search />
          <Create />
        </div>
        <Table />
      </div>
    </InformationTableContextProvider>
  )
}
