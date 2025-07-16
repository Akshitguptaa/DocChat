'use client'

import { trpc } from "@/app/_trpc/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/client"
import { Children, ReactNode, useState } from "react"

const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() => trpc.createClient({
    links: [
      httpBatchLink({
        url: "https://localhost:3000/api/trpc",
      }),
    ],
  }))

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  )

}