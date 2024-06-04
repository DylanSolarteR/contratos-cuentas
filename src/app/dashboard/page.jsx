"use client";
import DashboardCard from "@/components/DashboardCard";
import { useAppContext } from "@/context";
import ContratoPlantillaCard from "@/components/ContratoPlantillaCard";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Separator,
} from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Plus } from "lucide-react"
import { useEffect, useState } from "react";
import { getPlantillas } from "@/actions/Plantillas"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation";
export default function Historial() {

  const { instance, cuentas } = useAppContext();
  const [plantillas, setPlantillas] = useState([]);
  const token = localStorage.getItem('token');
  const [name, setName] = useState("");
  const router = useRouter()
  const onSubmit = () => {
    if (name.length > 1) {
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

  useEffect(() => {
    getPlantillas(instance, token).then((res) => {
      if (res != 'error') {
        setPlantillas(res)
      } else {
        throw new Error('error')
      }
    }).catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo encontrar la plantilla',
      }).then(() => {
        router.push('/dashboard')
      })

    }
    )
  }, []);


  return (
    <div>
      <div className="px-4 w-full pt-8 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard className="h-full" title={'Ver contratos'} desc={"Aquí puedes revisar todos los contratos que hayas generado hasta el momento."} refLink={"/dashboard/contratos"}></DashboardCard>
        <DashboardCard title={'Ver cuentas de cobro'} desc={"Aquí puedes revisar todas las cuentas de cobro que hayas generado hasta el momento."} refLink={"/dashboard/cuentas"}></DashboardCard>
        <DashboardCard title={'Ver clientes'} desc={"Aquí puedes revisar todos los clientes que hayas registrado hasta el momento."} refLink={"/dashboard/clientes"}></DashboardCard>
      </div>
      <div className="px-4">
        <Separator className="mt-8 mb-2 border border-light-texto dark:border-dark-texto" />
        <h1>Plantillas</h1>
        <Separator className="mb-8 mt-2 border border-light-texto dark:border-dark-texto" />
        <Accordion type="single" collapsible className="w-full ">
          <AccordionItem value="item-1 ">
            <AccordionTrigger className="border-b border-b-light-texto dark:border-b-dark-texto">Contratos</AccordionTrigger>
            <AccordionContent className="mb-4 border-b border-b-light-texto dark:border-b-dark-texto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="mt-2 group border h-[188px] items-center justify-center flex flex-col hover:border-primary border-primary gap-4">
                    <Plus />
                    Crear plantilla
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-light-fondo dark:bg-dark-fondo">
                  <DialogHeader>
                    <DialogTitle>Crear nueva plantilla</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Nombre
                      </Label>
                      <Input
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        id="name"
                        className="col-span-3 bg-light-fondo dark:bg-dark-fondo"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant='ghost' onClick={onSubmit} type="submit">Guardar</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              {plantillas.map((plantilla, index) => (
                <ContratoPlantillaCard title={plantilla.nombre} idPlantilla={plantilla._id} estado={plantilla.status} key={index} />
              ))}

            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="border-b border-b-light-texto dark:border-b-dark-texto">Cuentas de cobro</AccordionTrigger>
            <AccordionContent className="mb-4 border-b border-b-light-texto dark:border-b-dark-texto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <Button className="mt-2 group border h-[188px] items-center justify-center flex flex-col hover:border-primary border-primary gap-4">
                <Plus />
                Crear plantilla
              </Button>
              {cuentas.map((cuenta, index) => (
                <ContratoPlantillaCard title={cuenta.nombre} idPlantilla={"66459ce76d8cc25298d90159"} estado={"aprobada"} key={index} />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>

  );
}
