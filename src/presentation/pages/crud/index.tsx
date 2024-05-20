import { InformationTable } from "./components/information-table"

export function CurdPage() {
  return (
    <main className="w-full p-3 container">
      <h1 className="text-center text-4xl font-black py-10">Clean CRUD</h1>
      <InformationTable />
    </main>
  )
}
