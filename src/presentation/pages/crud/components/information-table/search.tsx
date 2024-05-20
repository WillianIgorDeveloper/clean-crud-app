import { Input } from "@/presentation/components/ui/input"
import { SearchIcon } from "lucide-react"
import { useInformationTableContext } from "./context"

export function Search() {
  const { setSearch } = useInformationTableContext()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const search = event.currentTarget.search.value
    setSearch(search)
  }

  return (
    <form className="flex-1 flex items-center relative" onSubmit={handleSubmit}>
      <Input type="text" name="search" placeholder="Search" />
      <SearchIcon size={16} className="absolute right-3" />
    </form>
  )
}
