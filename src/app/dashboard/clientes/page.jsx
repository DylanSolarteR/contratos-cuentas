"use client"

import { useState, useEffect } from "react"
import { useAppContext } from "@/context";
import { useRouter } from "next/navigation";
import {
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
import { getClientes } from "@/actions/clientes";
import Loading from "@/components/Loading";
import Swal from "sweetalert2";
import { cn } from "@/lib/utils";

export const columns = [
  {
    accessorKey: "nombreCompleto",
    header: "Nombre Completo",
    cell: ({ row }) =>
      <div className="capitalize">{row.getValue("nombreCompleto")}</div>
    ,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "tipoDocumento",
    header: "Tipo de documento",
    cell: ({ row }) =>
      <div className="capitalize">{row.getValue("tipoDocumento")}</div>
    ,
  },
  {
    accessorKey: "documento",
    header: "Documento",
    cell: ({ row }) =>
      <div className="capitalize">{row.getValue("documento")}</div>
    ,
  },
  {
    accessorKey: "telefono",
    header: "Telefono",
    cell: ({ row }) =>
      <div className="capitalize">{row.getValue("telefono")}</div>
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
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                const axios = require('axios').default;

                Swal.fire({
                  title: "Enviar",
                  text: "¿Quieres eliminar el cliente?",
                  icon: "question",
                  showCancelButton: true,
                  cancelButtonText: "Cancelar",
                  confirmButtonText: "Confirmar",
                }).then((result) => {
                  if (result.isConfirmed) {
                    axios.delete(`http://localhost:3001/api/v1/cliente/${payment._id}`, {
                      headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                      },
                    })
                      .then((response) => {
                        if (response.status === 200) {
                          Swal.fire({
                            title: "Listo",
                            text: "Usuario eliminado",
                            icon: "success",
                          }).then(() => {
                            window.location.reload()
                          })
                        }
                      })
                      .catch((err) => {
                        console.log(err)
                        Swal.fire({
                          title: "Error de eliminación",
                          text: "No se pudo eliminar",
                          icon: "error",
                          confirmButtonText: "OK",
                        });
                      });
                  }
                });
              }}
            >
              Eliminar cliente
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu >
      )
    },
  },
]

export default function DataTableDemo() {
  const [token, setToken] = useState("");
  const router = useRouter()
  const { daltonismo, instance } = useAppContext();
  const [sorting, setSorting] = useState([])
  const [data, setData] = useState([])
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
      getClientes(instance, localStorage.getItem("token")).then((res) => {
        if (res.length > 0) {
          setData(res)
        } else {
          throw new Error('error')
        }
      }).catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudieron encontrar los clientes',
        }).then(() => {
          router.push('/dashboard/clientes/crear')
        })

      }
      )

      setMounted(true)
    }
  }, []);

  return mounted ? (
    <div>
      {data?.length > 0 &&

        <div className="w-full px-36" >
          <div className="pt-6 justify-center w-full flex">
            <Button
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
              Crear cliente
            </Button>
          </div>
          <div className="flex items-center py-4">
            <Input
              placeholder="Filtrar correo..."
              value={(table.getColumn("email")?.getFilterValue()) ?? ""}
              onChange={(event) =>
                table.getColumn("email")?.setFilterValue(event.target.value)
              }
              className="max-w-sm bg-transparent border border-primary"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns <ChevronDown className="ml-2 h-4 w-4" />
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
                        className={cn("capitalize",
                          daltonismo === "normal"
                            ? " focus:bg-light-acento-2 focus:dark:bg-dark-acento-2"
                            : daltonismo === "protanopia"
                              ? "focus:bg-protanopia-light-acento-2 focus:dark:bg-protanopia-dark-acento-2"
                              : daltonismo === "deuteranopia"
                                ? "focus:bg-deuteranopia-light-acento-2 focus:dark:bg-deuteranopia-dark-acento-2"
                                : "focus:bg-tritanopia-light-acento-2 focus:dark:bg-tritanopia-dark-acento-2"
                        )}
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
          <div className="rounded-md w-full">
            <Table className={cn("border rounded-md w-full",
              daltonismo === "normal"
                ? "border-light-acento-2/40 dark:border-dark-acento-2/40"
                : daltonismo === "protanopia"
                  ? "border-protanopia-light-acento-2/40 dark:border-protanopia-dark-acento-2/40"
                  : daltonismo === "deuteranopia"
                    ? "border-deuteranopia-light-acento-2/40 dark:border-deuteranopia-dark-acento-2/40"
                    : "border-tritanopia-light-acento-2/40 dark:border-tritanopia-dark-acento-2/40"
            )}>
              <TableHeader className={cn("rounded-md", daltonismo === "normal"
                ? "hover:bg-light-acento-2/40 dark:hover:bg-dark-acento-2/40"
                : daltonismo === "protanopia"
                  ? "hover:bg-protanopia-light-acento-2/40 dark:hover:bg-protanopia-dark-acento-2/40"
                  : daltonismo === "deuteranopia"
                    ? "hover:bg-deuteranopia-light-acento-2/40 dark:hover:bg-deuteranopia-dark-acento-2/40"
                    : "hover:bg-tritanopia-light-acento-2/40 dark:hover:bg-tritanopia-dark-acento-2/40",
                daltonismo === "normal"
                  ? "border-light-acento-2/40 dark:border-dark-acento-2/40"
                  : daltonismo === "protanopia"
                    ? "border-protanopia-light-acento-2/40 dark:border-protanopia-dark-acento-2/40"
                    : daltonismo === "deuteranopia"
                      ? "border-deuteranopia-light-acento-2/40 dark:border-deuteranopia-dark-acento-2/40"
                      : "border-tritanopia-light-acento-2/40 dark:border-tritanopia-dark-acento-2/40"
              )}>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}
                    className={cn("border-0 rounded-md",
                      daltonismo === "normal"
                        ? "border-b-light-acento-2/40 dark:border-b-dark-acento-2/40"
                        : daltonismo === "protanopia"
                          ? "border-b-protanopia-light-acento-2/40 dark:border-b-protanopia-dark-acento-2/40"
                          : daltonismo === "deuteranopia"
                            ? "border-b-deuteranopia-light-acento-2/40 dark:border-b-deuteranopia-dark-acento-2/40"
                            : "border-b-tritanopia-light-acento-2/40 dark:border-b-tritanopia-dark-acento-2/40"
                    )}>
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
                      className={cn(daltonismo === "normal"
                        ? "hover:bg-light-acento-2/40 dark:hover:bg-dark-acento-2/40"
                        : daltonismo === "protanopia"
                          ? "hover:bg-protanopia-light-acento-2/40 dark:hover:bg-protanopia-dark-acento-2/40"
                          : daltonismo === "deuteranopia"
                            ? "hover:bg-deuteranopia-light-acento-2/40 dark:hover:bg-deuteranopia-dark-acento-2/40"
                            : "hover:bg-tritanopia-light-acento-2/40 dark:hover:bg-tritanopia-dark-acento-2/40"
                        ,
                        daltonismo === "normal"
                          ? "border-b-light-acento-2/40 dark:border-b-dark-acento-2/40"
                          : daltonismo === "protanopia"
                            ? "border-b-protanopia-light-acento-2/40 dark:border-b-protanopia-dark-acento-2/40"
                            : daltonismo === "deuteranopia"
                              ? "border-b-deuteranopia-light-acento-2/40 dark:border-b-deuteranopia-dark-acento-2/40"
                              : "border-b-tritanopia-light-acento-2/40 dark:border-b-tritanopia-dark-acento-2/40"
                      )}
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
    </div >
  ) : <div className="h-screen w-screen">
    <Loading />
  </div>
}


