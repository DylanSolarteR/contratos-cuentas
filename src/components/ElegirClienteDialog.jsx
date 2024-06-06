import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Swal from "sweetalert2";
import { useAppContext } from "@/context"
import { useEffect, useState } from "react"
import Loading from "@/components/Loading";
import { getClientes } from "@/actions/clientes";
import { generateContrato } from "@/actions/contrato";

function ElegirClienteDialog({ idPlantila }) {
    const [open, setOpen] = useState(false)
    const [clientes, setClientes] = useState([])
    const [clientesSeleccionados, setClientesSeleccionados] = useState([])
    const { daltonismo, instance } = useAppContext()
    const [loading, setLoading] = useState(true)

    // const mockdata = [
    //     {
    //         _id: 1,
    //         nombreCompleto: "Juan",
    //         tipoDocumento: "CC",
    //         documento: 123456789,
    //         email: "example@mail.com"
    //     },
    //     {
    //         _id: 2,
    //         nombreCompleto: "Andres",
    //         tipoDocumento: "CC",
    //         documento: 234567891,
    //         email: "example@mail.com"
    //     },
    //     {
    //         _id: 3,
    //         nombreCompleto: "Carlos",
    //         tipoDocumento: "CC",
    //         documento: 345678912,
    //         email: "example@mail.com"
    //     },
    //     {
    //         _id: 4,
    //         nombreCompleto: "Bryan",
    //         tipoDocumento: "CC",
    //         documento: 456789123,
    //         email: "example@mail.com"
    //     },
    //     {
    //         _id: 5,
    //         nombreCompleto: "Ricardo",
    //         tipoDocumento: "CC",
    //         documento: 567891234,
    //         email: "example@mail.com"
    //     },
    //     {
    //         _id: 6,
    //         nombreCompleto: "David",
    //         tipoDocumento: "CC",
    //         documento: 678912345,
    //         email: "example@mail.com"
    //     },
    //     {
    //         _id: 7,
    //         nombreCompleto: "Camilo",
    //         tipoDocumento: "CC",
    //         documento: 789123456,
    //         email: "example@mail.com"
    //     },
    //     {
    //         _id: 8,
    //         nombreCompleto: "Felipe",
    //         tipoDocumento: "CC",
    //         documento: 891234567,
    //         email: "example@mail.com"
    //     },
    //     {
    //         _id: 9,
    //         nombreCompleto: "Santiago",
    //         tipoDocumento: "CC",
    //         documento: 912345678,
    //         email: "example@mail.com"
    //     },
    //     {
    //         _id: 10,
    //         nombreCompleto: "Luis",
    //         tipoDocumento: "CC",
    //         documento: 123456789,
    //         email: "example@mail.com"
    //     },
    //     {
    //         _id: 11,
    //         nombreCompleto: "Juan",
    //         tipoDocumento: "CC",
    //         documento: 123456789,
    //         email: "example@mail.com"
    //     },
    //     {
    //         _id: 12,
    //         nombreCompleto: "Andres",
    //         tipoDocumento: "CC",
    //         documento: 234567891,
    //         email: "example@mail.com"
    //     },
    //     {
    //         _id: 13,
    //         nombreCompleto: "Carlos",
    //         tipoDocumento: "CC",
    //         documento: 345678912,
    //         email: "example@mail.com"
    //     },
    //     {
    //         _id: 14,
    //         nombreCompleto: "Bryan",
    //         tipoDocumento: "CC",
    //         documento: 456789123,
    //         email: "example@mail.com"
    //     },
    //     {
    //         _id: 15,
    //         nombreCompleto: "Ricardo",
    //         tipoDocumento: "CC",
    //         documento: 567891234,
    //         email: "example@mail.com"
    //     },
    //     {
    //         _id: 16,
    //         nombreCompleto: "David",
    //         tipoDocumento: "CC",
    //         documento: 678912345,
    //         email: "example@mail.com"
    //     },
    //     {
    //         _id: 17,
    //         nombreCompleto: "Camilo",
    //         tipoDocumento: "CC",
    //         documento: 789123456,
    //         email: "example@mail.com"
    //     },
    //     {
    //         _id: 18,
    //         nombreCompleto: "Felipe",
    //         tipoDocumento: "CC",
    //         documento: 891234567,
    //         email: "example@mail.com"
    //     },
    //     {
    //         _id: 19,
    //         nombreCompleto: "Santiago",
    //         tipoDocumento: "CC",
    //         documento: 912345678,
    //         email: "example@mail.com"
    //     },
    //     {
    //         _id: 20,
    //         nombreCompleto: "Luis",
    //         tipoDocumento: "CC",
    //         documento: 123456789,
    //         email: "example@mail.com"
    //     },
    // ]

    useEffect(() => {
        getClientes(instance, localStorage.getItem("token")).then((res) => {
            setClientes(res)
            setLoading(false)
        }).catch((err) => {
            Swal.fire({
                title: "Error de obtencion de clientes",
                icon: "error",
                confirmButtonText: "OK",
            });
            setOpen(false)
        })
    }, []);

    const onGenerate = () => {
        setOpen(false)
        if (clientesSeleccionados.length === 0) {

            Swal.fire({
                title: "Error",
                text: "Debes seleccionar al menos un cliente",
                icon: "error",
                confirmButtonText: "Aceptar",
            }).then(
                () => { setOpen(true) }
            )
            return
        }

        //iterar por cada cliente seleccionado y generar el contrato con el id de la plantilla
        clientesSeleccionados.forEach((cliente) => {
            generateContrato(instance, localStorage.getItem("token"), idPlantila, cliente._id)
        })

        Swal.fire({
            title: "Contratos generados",
            text: "Los contratos han sido generados exitosamente",
            icon: "success",
            confirmButtonText: "Aceptar",
        })
        console.log(clientesSeleccionados)
    }

    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}
            className="bg-light-fondo dark:bg-dark-fondo"
        >
            {/* Dialogo para insertar nueva clausula */}
            <DialogTrigger asChild>
                <Button className={`shadow-lg border border-dark-fondo/20 ${daltonismo === "normal"
                    ? "bg-light-acento-2  dark:bg-dark-acento-2"
                    : daltonismo === "protanopia"
                        ? "bg-protanopia-light-acento-2 dark:bg-protanopia-dark-acento-2"
                        : daltonismo === "deuteranopia"
                            ? "bg-deuteranopia-light-acento-2 dark:bg-deuteranopia-dark-acento-2"
                            : "bg-tritanopia-light-acento-2 dark:bg-tritanopia-dark-acento-2"
                    } 
              ${daltonismo === "normal"
                        ? "hover:bg-light-acento-1  dark:hover:bg-dark-acento-1"
                        : daltonismo === "protanopia"
                            ? "hover:bg-protanopia-light-acento-1 hover:dark:bg-protanopia-dark-acento-1"
                            : daltonismo === "deuteranopia"
                                ? "hover:bg-deuteranopia-light-acento-1 hover:dark:bg-deuteranopia-dark-acento-1"
                                : "hover:bg-tritanopia-light-acento-1 hover:dark:bg-tritanopia-dark-acento-1"
                    }`}>Generar</Button>
            </DialogTrigger>
            <DialogContent className="max-w-[1600px] min-w-[400px] w-fit bg-light-fondo dark:bg-dark-fondo border-light-texto dark:border-dark-texto overflow-y-auto max-h-[80vh] z-50">
                <DialogTitle>Elige uno o mas clientes a los que generar los contratos</DialogTitle>
                <DialogDescription>
                    <div className="flex flex-col gap-2">
                        <div className="border border-light-acento-2 dark:border-dark-acento-2 grid grid-cols-4 gap-2 p-2 rounded-md shadow-md text-light-texto dark:text-dark-texto h-fit w-full text-center">
                            <p className=" h-full w-full rounded">Nombre</p>
                            <p className=" h-full w-full rounded">
                                <span>Tipo Documento</span>
                            </p>
                            <p className=" h-full w-full rounded">
                                <span>Numero Documento</span>
                            </p>
                            <p className=" h-full w-full rounded">
                                <span>Correo electronico</span>
                            </p>
                        </div>
                        {loading ? <Loading /> :

                            clientes.map((cliente) => (
                                <Toggle key={cliente._id} className="border border-light-acento-2 dark:border-dark-acento-2 hover:border-light-acento-1  dark:hover:border-dark-acento-1
                            grid grid-cols-4 gap-2 p-2 rounded-md shadow-md text-light-texto dark:text-dark-texto h-fit w-full"
                                    pressed={clientesSeleccionados.some(
                                        (c) => c._id === cliente._id
                                    )}
                                    onPressedChange={() => {
                                        // Aqui se deberia de poner la logica para seleccionar el cliente
                                        if (
                                            clientesSeleccionados.some(
                                                (c) => c._id === cliente._id
                                            )
                                        ) {
                                            setClientesSeleccionados(clientesSeleccionados.filter(c => c._id !== cliente._id))
                                        } else {
                                            setClientesSeleccionados([...clientesSeleccionados, cliente])
                                        }
                                    }
                                    }
                                >

                                    <p className="h-full w-full rounded">{cliente.nombreCompleto}</p>
                                    <p className="h-full w-full rounded">
                                        <span>{cliente.tipoDocumento}</span>
                                    </p>
                                    <p className="h-full w-full rounded">
                                        <span>{cliente.documento}</span>
                                    </p>
                                    <p className="h-full w-full rounded">
                                        <span>{cliente.email}</span>
                                    </p>
                                </Toggle>
                            ))}
                    </div>
                </DialogDescription>
                <DialogFooter>
                    <Button
                        onClick={onGenerate}
                        className="hover:bg-light-acento-1 shadow-lg bg-light-acento-2  dark:bg-dark-acento-2  dark:hover:bg-dark-acento-1 border border-dark-fondo/20"
                    >
                        Generar
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}

export default ElegirClienteDialog