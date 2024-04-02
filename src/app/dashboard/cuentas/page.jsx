"use client"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { useAppContext } from "@/context";
import { ArrowDownToLine } from "lucide-react";
import { Eye } from "lucide-react";

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
        <div className=" w-scrren h-screen pt-8">
            <main className={`flex h-full flex-col items-center px-10 md:px-36 py-4 bg-light-fondo dark:bg-dark-fondo${daltonismo === "normal"
                ? "text-light-texto shadow-light-acento-2 dark:text-dark-texto dark:shadow-dark-acento-2  bg-light-fondo dark:bg-dark-fondo"
                : daltonismo === "protanopia"
                    ? "text-protanopia-light-texto shadow-protanopia-light-acento-2 dark:text-protanopia-dark-texto dark:shadow-protanopia-dark-acento-2 bg-light-fondo dark:bg-dark-fondo"
                    : daltonismo === "deuteranopia"
                        ? "text-deuteranopia-light-texto shadow-deuteranopia-light-acento-2 dark:text-deuteranopia-dark-texto dark:shadow-deuteranopia-dark-acento-2 bg-light-fondo dark:bg-dark-fondo"
                        : "text-tritanopia-light-texto shadow-tritanopia-light-acento-2 dark:text-tritanopia-dark-texto dark:shadow-tritanopia-dark-acento-2 bg-light-fondo dark:bg-dark-fondo"
                }`}
            >
                <button className="mb-10 shadow-lg p-4 rounded-full">Crear cuenta de cobro</button>
                <Table>
                    <TableCaption>Lista de tus cuentas recientes.</TableCaption>
                    <TableHeader class="" >
                        <TableRow >
                            <TableHead class="text-center" >Codigo</TableHead>
                            <TableHead class="text-center">Cliente</TableHead>
                            <TableHead class="text-center">fecha</TableHead>
                            <TableHead class="text-center" >Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody class="text-center">
                        {cuentas.map((contrato) => (
                            <TableRow key={contrato.codigo}>
                                <TableCell className="font-medium">{contrato.codigo}</TableCell>
                                <TableCell>{contrato.cliente}</TableCell>
                                <TableCell>{contrato.fecha}</TableCell>
                                <TableCell>
                                    <button title="Desacrgar archivo" className="mr-5"><ArrowDownToLine></ArrowDownToLine></button>
                                    <button title="Ver archivo"><Eye></Eye></button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </main>
        </div>
    )
}
