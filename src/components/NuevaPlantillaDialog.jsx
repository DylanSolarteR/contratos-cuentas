import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppContext } from "@/context";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import Swal from "sweetalert2";
import parse from 'html-react-parser';
import { getItemsEncabezados } from "@/actions/Items";
import { LoaderCircle } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

function NuevaPlantillaDialog() {
    const { instance } = useAppContext();
    const token = localStorage.getItem('token');
    const [name, setName] = useState("");
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [api, setApi] = useState();
    const [encabezados, setEncabezados] = useState([])
    const [selectedEncabezado, setSelectedEncabezado] = useState({})

    useEffect(() => {
        if (!api) {
            return
        }


        api.on("select", () => {
            console.log(api.selectedScrollSnap())
            if (encabezados.length > 0)
                setSelectedEncabezado(encabezados[api.selectedScrollSnap()])
        })
    }, [api])

    useEffect(() => {
        //fetch de los encabezados
        getItemsEncabezados(instance, token).then((res) => {
            if (res != 'error') {
                setEncabezados(res)
                setSelectedEncabezado(res[0])
            }
        })
    }, [])


    const onSubmit = () => {
        if (name.length > 1) {
            setOpen(false);
            Swal.fire({
                title: "Enviar",
                text: "¿Confirmas el registro?",
                icon: "question",
                showCancelButton: true,
                cancelButtonText: "Cancelar",
                confirmButtonText: "Confirmar",
            }).then((result) => {
                if (result.isConfirmed) {
                    instance
                        .post("/plantilla", {
                            nombre: name,
                            status: "borrador",
                            encabezado: selectedEncabezado._id
                        }, {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            }
                        })
                        .then((response) => {
                            if (response.status === 200) {
                                router.push(`/dashboard/plantillas/${response.data._id}`)
                            }
                        })
                        .catch((err) => {
                            Swal.fire({
                                title: "Error de creación",
                                text: "Datos incorrectos",
                                icon: "error",
                                confirmButtonText: "OK",
                            });
                        });
                }
            });
        } else {
            Swal.fire({
                title: "Error",
                text: "El nombre no cumple con los requisitos",
                icon: "error",
            });
        }
    };
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="border h-full items-center justify-center flex flex-col hover:border-primary border-primary gap-4 bg-transparent">
                    <Plus />
                    Crear plantilla
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[600px] bg-light-fondo dark:bg-dark-fondo border-light-texto dark:border-dark-texto">
                <DialogHeader>
                    <DialogTitle>Crear nueva plantilla</DialogTitle>
                </DialogHeader>
                <div className="grid gap-3 py-4 w-full max-w-full">
                    <div className="flex flex-col items-center gap-4 w-full max-w-full">
                        <Label htmlFor="name" className="text-start w-full max-w-full">
                            Nombre
                        </Label>
                        <Input
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            id="name"
                            className="col-span-3 border-light-texto bg-light-fondo dark:border-dark-texto dark:bg-dark-fondo w-full max-w-full"
                        />
                        <Label htmlFor="carousel" className="text-start w-full max-w-full">
                            Encabezado
                        </Label>
                        <Carousel name='carousel' setApi={setApi} className=" w-full max-w-[80%]" >
                            <CarouselContent>
                                {(encabezados.length === 0) &&
                                    <div className='text-light-texto dark:text-dark-texto flex items-center justify-center w-full h-full'><LoaderCircle className='animate-spin h-12 w-12' /></div>
                                }
                                {(encabezados.length > 0) && encabezados.map((encabezado, index) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <Card className="bg-transparent border-light-texto dark:border-dark-texto">
                                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                                    <span className="text-md font-semibold text-justify">{parse(encabezado.contenido)}</span>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))
                                }
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant='ghost' onClick={onSubmit} type="submit">Guardar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default NuevaPlantillaDialog