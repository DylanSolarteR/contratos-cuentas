"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useAppContext } from "@/context";
import { ArrowDownToLine, Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

const cuentas = [
  {
    codigo: "INV001",
    cliente: "Juan perea",
    fecha: "20/10/12",
  },
  {
    codigo: "INV002",
    cliente: "María López",
    fecha: "15/12/12",
  },
  {
    codigo: "INV003",
    cliente: "Pedro Ramirez",
    fecha: "10/01/13",
  },
  {
    codigo: "INV004",
    cliente: "Luisa Martínez",
    fecha: "05/02/13",
  },
  {
    codigo: "INV005",
    cliente: "Carlos González",
    fecha: "30/03/13",
  },
  {
    codigo: "INV006",
    cliente: "Ana Fernández",
    fecha: "25/04/13",
  },
  {
    codigo: "INV007",
    cliente: "Sofía García",
    fecha: "20/05/13",
  },
  {
    codigo: "INV008",
    cliente: "Javier Ruiz",
    fecha: "15/06/13",
  },
  {
    codigo: "INV009",
    cliente: "Elena Sánchez",
    fecha: "10/07/13",
  },
  {
    codigo: "INV010",
    cliente: "Diego López",
    fecha: "05/08/13",
  },
  {
    codigo: "INV011",
    cliente: "Laura Pérez",
    fecha: "30/09/13",
  },
  {
    codigo: "INV012",
    cliente: "Andrés Hernández",
    fecha: "25/10/13",
  },
  {
    codigo: "INV013",
    cliente: "Isabel Díaz",
    fecha: "20/11/13",
  },
  {
    codigo: "INV014",
    cliente: "Miguel Torres",
    fecha: "15/12/13",
  },
  {
    codigo: "INV015",
    cliente: "Patricia García",
    fecha: "10/01/14",
  },
];

export default function Historialcuentas() {
  const { daltonismo } = useAppContext();
  return (
    <div className=" w-screen h-[90vh] pt-8">
      <main
        className={`flex h-full flex-col justify-center items-center gap-10 px-10 md:px-36 py-4 bg-light-fondo dark:bg-dark-fondo${
          daltonismo === "normal"
            ? "text-light-texto shadow-light-acento-2 dark:text-dark-texto dark:shadow-dark-acento-2  bg-light-fondo dark:bg-dark-fondo"
            : daltonismo === "protanopia"
            ? "text-protanopia-light-texto shadow-protanopia-light-acento-2 dark:text-protanopia-dark-texto dark:shadow-protanopia-dark-acento-2 bg-light-fondo dark:bg-dark-fondo"
            : daltonismo === "deuteranopia"
            ? "text-deuteranopia-light-texto shadow-deuteranopia-light-acento-2 dark:text-deuteranopia-dark-texto dark:shadow-deuteranopia-dark-acento-2 bg-light-fondo dark:bg-dark-fondo"
            : "text-tritanopia-light-texto shadow-tritanopia-light-acento-2 dark:text-tritanopia-dark-texto dark:shadow-tritanopia-dark-acento-2 bg-light-fondo dark:bg-dark-fondo"
        }`}
      >
        <Button
          variant="default"
          className={`md:text-xl text-base py-2 px-4 rounded-full shadow text-balance w-fit h-fit ${
            daltonismo === "normal"
              ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
              : daltonismo === "protanopia"
              ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
              : daltonismo === "deuteranopia"
              ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
              : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
          }`}
        >
          Crear cuenta de cobro
        </Button>
        <Table>
          <TableHeader class="">
            <TableRow
              className={`hover:bg-transparent dark:hover:bg-transparent border-b-2 ${
                daltonismo === "normal"
                  ? "border-b-light-acento-2/50 dark:border-b-dark-acento-2/50"
                  : daltonismo === "protanopia"
                  ? "border-b-protanopia-light-acento-2/50 dark:border-b-protanopia-dark-acento-2/50"
                  : daltonismo === "deuteranopia"
                  ? "border-b-deuteranopia-light-acento-2/50 dark:border-b-deuteranopia-dark-acento-2/50"
                  : "border-b-tritanopia-light-acento-2/50 dark:border-b-tritanopia-dark-acento-2/50"
              }`}
            >
              <TableHead class="text-center">Codigo</TableHead>
              <TableHead class="text-center">Cliente</TableHead>
              <TableHead class="text-center">Fecha</TableHead>
              <TableHead class="text-center">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody class="text-center">
            {cuentas.map((contrato) => (
              <TableRow
                key={contrato.codigo}
                className={`${
                  daltonismo === "normal"
                    ? "hover:bg-light-acento-2/40 hover:dark:bg-dark-acento-2/40"
                    : daltonismo === "protanopia"
                    ? "hover:bg-protanopia-light-acento-2/40 hover:dark:bg-protanopia-dark-acento-2/40"
                    : daltonismo === "deuteranopia"
                    ? "hover:bg-deuteranopia-light-acento-2/40 hover:dark:bg-deuteranopia-dark-acento-2/40"
                    : "hover:bg-tritanopia-light-acento-2/40 hover:dark:bg-tritanopia-dark-acento-2/40"
                } border-none
                `}
              >
                <TableCell className="font-medium">{contrato.codigo}</TableCell>
                <TableCell>{contrato.cliente}</TableCell>
                <TableCell>{contrato.fecha}</TableCell>
                <TableCell
                  className={`text-center flex flex-row justify-center items-center`}
                >
                  <Button
                    variant="link"
                    className="w-fit h-fit"
                    title="Descargar archivo"
                  >
                    <ArrowDownToLine />
                  </Button>
                  <Button
                    variant="link"
                    className="w-fit h-fit"
                    title="Editar archivo"
                  >
                    <Pencil />
                  </Button>
                  <Button
                    variant="link"
                    className="w-fit h-fit"
                    title="Editar archivo"
                  >
                    <Trash />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </div>
  );
}
