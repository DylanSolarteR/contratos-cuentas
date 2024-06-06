"use client";
import DashboardCard from "@/components/DashboardCard";
import { useAppContext } from "@/context";
import ContratoPlantillaCard from "@/components/ContratoPlantillaCard";
import Swal from "sweetalert2";
import {
  Separator,
} from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { getPlantillas } from "@/actions/Plantillas"
import { useRouter } from "next/navigation";
import NuevaPlantillaDialog from "@/components/NuevaPlantillaDialog";
import Loading from "@/components/Loading";
export default function Historial() {

  const { instance, setIsLogged } = useAppContext();
  const [plantillas, setPlantillas] = useState([]);
  const [mounted, setMounted] = useState(false)
  let token = '';
  const router = useRouter()


  useEffect(() => {
    token = localStorage.getItem('token');
    if (!token) {
      router.push('/login')
    } else {
      setMounted(true)
      setIsLogged(true)
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
          //router.push('/dashboard')
        })

      }
      )
    }
  }, []);


  return mounted ? (
    <div>
      <div className="px-4 w-full pt-8 gap-5 flex flex-row justify-center items-center">
        <DashboardCard className="h-full" title={'Ver contratos'} desc={"Aquí puedes revisar todos los contratos que hayas generado hasta el momento."} refLink={"/dashboard/contratos"}></DashboardCard>
        {/* <DashboardCard title={'Ver cuentas de cobro'} desc={"Aquí puedes revisar todas las cuentas de cobro que hayas generado hasta el momento."} refLink={"/dashboard/cuentas"}></DashboardCard> */}
        <DashboardCard title={'Ver clientes'} desc={"Aquí puedes revisar todos los clientes que hayas registrado hasta el momento."} refLink={"/dashboard/clientes"}></DashboardCard>
      </div>
      <div className="px-36">
        <Separator className="mt-8 mb-2 border border-light-texto dark:border-dark-texto" />
        <Accordion type="single" collapsible className="w-full border-b-light-texto dark:border-b-dark-texto mb-6">
          <AccordionItem value="item-1" className="border-light-texto dark:border-dark-texto">
            <AccordionTrigger className="w-full border-b border-b-light-texto dark:border-b-dark-texto">Plantillas de Contratos</AccordionTrigger>
            <AccordionContent className="w-full h-60 py-2 border-b-light-texto dark:border-b-dark-texto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center justify-center overflow-y-auto">
              <NuevaPlantillaDialog />
              {plantillas.map((plantilla, index) => (
                <ContratoPlantillaCard title={plantilla.nombre} idPlantilla={plantilla._id} estado={plantilla.status} key={index} />
              ))}

            </AccordionContent>
          </AccordionItem>
          {/* <AccordionItem value="item-2" className="border-light-texto dark:border-dark-texto">
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
          </AccordionItem> */}
        </Accordion>
      </div>
    </div>

  ) : (
    <div className="h-screen w-screen">
      <Loading />
    </div>
  );
}
