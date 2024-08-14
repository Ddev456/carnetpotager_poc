"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpRight, MoreHorizontal } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export type Plant = {
  id: string
  name: string
  category: string
  description: string
  image: string
}

export const columns: ColumnDef<Plant>[] = [
  {
    accessorKey: "image",
    header: "",
    cell: ({ row }) => {
      return <img src={row.original.image} alt={row.original.name} width={50} height={50} className="rounded-lg" />
    },
  },
  {
    accessorKey: "name",
    header: "Plante",
    cell: ({ row }) => {
      return <div className="flex flex-col">
        <span className="text-lg font-bold">{row.original.name}</span>
        <span className="text-sm text-gray-500">{row.original.description}</span>
      </div>
    },
  },
  {
    accessorKey: "category",
    header: "Catégorie",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      return <Button><ArrowUpRight /></Button>
    },
  }
]
