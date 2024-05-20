import { createContext, useContext, useState } from "react"

type InformationTableContextState = {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

type InformationTableContextProps = {
  children: React.ReactNode
}

const InformationTableContext = createContext<InformationTableContextState>({
  search: "",
  setSearch: () => {},
})

export function InformationTableContextProvider({
  children,
}: InformationTableContextProps) {
  const [search, setSearch] = useState("")

  return (
    <InformationTableContext.Provider value={{ search, setSearch }}>
      {children}
    </InformationTableContext.Provider>
  )
}

export function useInformationTableContext() {
  const context = useContext(InformationTableContext)

  if (!context)
    throw new Error(
      "useInformationTableContext must be used within an InformationTableContextProvider",
    )

  return context
}
