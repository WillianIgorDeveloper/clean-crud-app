import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
// Middlewares
import { OnlyPublicRoutes, ProtectedRoutes } from "@/middleware"
// State management
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
const queryClient = new QueryClient()
// Pages
import { HomePage } from "@/presentation/pages/home"
import { NotFoundPage } from "@/presentation/pages/not-found"
// Temporary Crud Page
import { CurdPage } from "@/presentation/pages/crud"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route element={<OnlyPublicRoutes />} />
          <Route element={<ProtectedRoutes />} />
          <Route path="*" element={<NotFoundPage />} />
          {/* Temporary Crud Page */}
          <Route path="/crud" element={<CurdPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
