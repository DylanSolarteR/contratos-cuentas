"use client";
import { useRouter } from "next/navigation";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import ElegirClienteDialog from "@/components/ElegirClienteDialog";
import { useAppContext } from "@/context";
import { Badge } from "./ui/badge";
function ContratoPlantillaCard({ title, estado, idPlantilla }) {
    const router = useRouter()
    const { daltonismo } = useAppContext();
    const onEdit = () => {
        if (estado == 'aprobada') {

            Swal.fire({
                title: "Editar",
                text: "Si editas esta plantilla su estado pasara a borrador y no podras generar contratos hasta que sea aprovada",
                icon: "question",
                showCancelButton: true,
                cancelButtonText: "Cancelar",
                confirmButtonText: "Continuar",
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push(`/dashboard/plantillas/${idPlantilla}`)
                }
            });
        }
        if (estado == 'borrador') {
            router.push(`/dashboard/plantillas/${idPlantilla}`)
        }
        if (estado == 'revision') {

            Swal.fire({
                title: "Editar",
                text: "Si editas esta plantilla y guardas los cambios su estado pasara a borrador de nuevo y no podras generar contratos hasta que sea aprovada.",
                icon: "question",
                showCancelButton: true,
                cancelButtonText: "Cancelar",
                confirmButtonText: "Continuar",
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push(`/dashboard/plantillas/${idPlantilla}`)
                }
            });
        }
    }


    return (
        <div className={`relative h-full min-h-[200px] max-h-full max-w-[300px] w-full rounded-lg`}>
            <Card className={`max-w-full grid grid-flow-row grid-cols-1 h-full relative p-0 border-none
                ${daltonismo === "normal"
                    ? "bg-light-acento-2  dark:bg-dark-acento-2"
                    : daltonismo === "protanopia"
                        ? "bg-protanopia-light-acento-2 dark:bg-protanopia-dark-acento-2"
                        : daltonismo === "deuteranopia"
                            ? "bg-deuteranopia-light-acento-2 dark:bg-deuteranopia-dark-acento-2"
                            : "bg-tritanopia-light-acento-2 dark:bg-tritanopia-dark-acento-2"
                } shadow-md ${daltonismo === "normal"
                    ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
                    : daltonismo === "protanopia"
                        ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
                        : daltonismo === "deuteranopia"
                            ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                            : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
                }`}>
                <CardHeader className="w-fit place-self-start ">
                    <Badge variant={estado} className="text-sm">{estado.toUpperCase()}</Badge>
                </CardHeader>
                <CardContent className={`max-w-[300px] w-full`}>
                    <CardTitle className="overflow-auto text-xl w-full">{title}</CardTitle>
                </CardContent>
                <CardFooter className="grid grid-cols-2 gap-2">
                    {estado == 'aprobada' && <ElegirClienteDialog />}
                    <Button onClick={onEdit} className={`shadow-lg border border-dark-fondo/20 ${daltonismo === "normal"
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
                        }`}>Editar</Button>
                </CardFooter>
            </Card>
        </div >
    );
}

export default ContratoPlantillaCard;
