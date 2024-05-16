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

function ContratoPlantillaCard({ title, estado, idPlantilla }) {
    const router = useRouter()

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
    const onGenerate = () => {
        router.push('')
    }

    return (
        <div className="mt-2 h-[190px]">
            <Card className="h-full bg-light-acento-2  dark:bg-dark-acento-2">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    Estado: {estado}
                </CardContent>
                <CardFooter className="grid grid-cols-2 gap-2">
                    {estado == 'aprobada' && <Button onClick={onGenerate} className=" shadow-md bg-light-acento-2  dark:bg-dark-acento-2 hover:bg-light-acento-1  dark:hover:bg-dark-acento-1">Generar</Button>}
                    <Button onClick={onEdit} className="hover:bg-light-acento-1 shadow-md bg-light-acento-2  dark:bg-dark-acento-2  dark:hover:bg-dark-acento-1">Editar</Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default ContratoPlantillaCard;
