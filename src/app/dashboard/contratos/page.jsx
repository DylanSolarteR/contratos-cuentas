"use client"

import { useState, useEffect } from "react"
import { useAppContext } from "@/context";
import { useRouter } from "next/navigation";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Loading from "@/components/Loading";
import { getContratos, descargarContrato } from "@/actions/contrato";
import Swal from "sweetalert2";

export const columns = [
  {
    accessorKey: "documento",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Documento
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("cliente").documento}</div>,
  },
  {
    accessorKey: "cliente",
    header: "Cliente",
    cell: ({ row }) =>
      <div className="capitalize">{(row.getValue("cliente").nombreCompleto).toString()}</div>
    ,
  },
  {
    accessorKey: "estado",
    header: "Estado",
    cell: ({ row }) =>
      <div className="capitalize">{row.getValue("estado")}</div>
    ,
  },
  {
    accessorKey: "createdAt",
    header: "Fecha",
    cell: ({ row }) =>
      <div className="capitalize">{row.getValue("createdAt")}</div>
    ,
  },
  {
    accessorKey: "telefono",
    header: "Teléfono",
    cell: ({ row }) =>
      <div className="capitalize">{row.getValue("cliente").telefono}</div>
    ,
  },
  {
    header: "Acciones",
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {

                const axios = require('axios').default;
                const instance = axios.create({
                  baseURL: 'http://localhost:3001/api/v1',
                });
                descargarContrato(instance, localStorage.getItem("token"), payment._id).then((res) => {
                  if (res != 'error') {
                    Swal.fire({
                      icon: 'success',
                      title: 'Listo',
                      text: 'Contrato descargado',
                    })
                  } else {
                    throw new Error('error')
                  }
                }).catch((err) => {
                  Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se pudo descargar el contrato',
                  }).then(() => {
                    console.log("F")
                    //router.push('/dashboard')
                  })

                }
                )
              }}
            >
              Descargar contrato
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function HistorialContratos() {
  const router = useRouter()
  const { daltonismo, instance } = useAppContext();
  const [sorting, setSorting] = useState([])
  const [data, setData] = useState([])
  const [token, setToken] = useState("");
  const [columnFilters, setColumnFilters] = useState(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    useState({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  const [mounted, setMounted] = useState(false)



  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (!localStorage.getItem("token")) {
      router.push("/login");
    } else {
      getContratos(instance, localStorage.getItem("token")).then((res) => {
        if (res != 'error') {
          setData(res)
        } else {
          throw new Error('error')
        }
      }).catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudieron encontrar los contratos',
        }).then(() => {
          router.push('/dashboard')
        })

      }
      )

      setMounted(true)
    }
  }, []);

  return mounted ? (
    <div>
      {data?.length > 0 &&

        <div className="w-full mx-2" >
          <div className="pt-6 justify-center w-full flex">
            {/* <Button
              onClick={() => { router.push('/dashboard/clientes/crear') }}
              variant="default"
              className={`md:text-xl text-base py-2 px-4 rounded-full shadow text-balance w-fit h-fit ${daltonismo === "normal"
                ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
                : daltonismo === "protanopia"
                  ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
                  : daltonismo === "deuteranopia"
                    ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                    : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
                }`}
            >
              Crear contrato
            </Button> */}
          </div>
          <div className="flex items-center py-4">
            <Input
              placeholder="Filtrar documento..."
              value={(table.getColumn("documento")?.getFilterValue()) ?? ""}
              onChange={(event) =>
                table.getColumn("documento")?.setFilterValue(event.target.value)
              }
              className="max-w-sm bg-transparent border border-primary"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columnas <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    )
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                        </TableHead>
                      )
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="flex-1 text-sm text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Anterior
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Siguiente
              </Button>
            </div>
          </div>
        </div>}
    </div>
  ) : <div className="h-screen w-screen">
    <Loading />
  </div>
}