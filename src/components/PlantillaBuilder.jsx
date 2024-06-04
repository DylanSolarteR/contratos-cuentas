"use client";
import { useAppContext } from "@/context";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Designer from "@/components/Designer";
import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import DragOverlayWrapper from "./DragOverlayWrapper";
import { addItems, getItems } from "@/actions/Items"

import { getPlantillaById, updatePlantilla, deletePlantilla } from "@/actions/Plantillas"
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

function PlantillaBuilder({ id }) {
  const { addItemNotAdded, addItemAtStart, setAllItems, addItemToAllItems, instance, allItems, setItems, setItemsNotAdded, items } = useAppContext()
  const [mounted, setMounted] = useState(false);
  const token = localStorage.getItem('token')
  const [plantilla, setPlantilla] = useState({});
  const router = useRouter();
  const { daltonismo } = useAppContext();
  const [nombre, setNombre] = useState();

  if (!mounted) {
    // console.log("builder")

    getPlantillaById(instance, id, token).then((res) => {
      if (res === 'error') throw new Error('error')
      setItems([])
      setItemsNotAdded([])
      setAllItems([])
      // console.log(res.items)
      const itemsDesigner = res.items.map((item, index) => {
        return { id: item._id, itemId: item._id, titulo: item.titulo, tipo: item.tipo, contenido: item.contenido }
      })
      setItems([...itemsDesigner])

      const itemsSideBar = res.items.map((item, index) => {
        return { id: item._id, itemId: item._id, titulo: item.titulo, tipo: item.tipo, contenido: item.contenido }
      })
      setItemsNotAdded([...itemsSideBar])

      getItems(instance, token).then((allItemsArray) => {
        const globalItems = allItemsArray.map((item, index) => {
          return { id: item._id, itemId: item._id, titulo: item.titulo, contenido: item.contenido, tipo: 'clausula' }
        })
        setAllItems([...globalItems])
      })



      setMounted(true);
      setNombre(res.nombre)
      setPlantilla(res);

    }).catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo encontrar la plantilla ' + err,
      }).then(() => {
        console.log(err)
        router.push('/dashboard')
      })
    })
    // addItem(0, { id: 'encabezado-1', itemId: "encabezado-1", titulo: 'Encabezado 1', contenido: 'lorem ipsum' })
  }



  function handleChangeNombre(e) {
    setNombre(e.target.value);
  }

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  function handleGuardarySalir() {
    const itemsIds = items.map((item) => {
      return {
        _id: item.itemId
        // , titulo: item.titulo, contenido: item.contenido, tipo: item.tipo 
      }
    })
    const data = {
      nombre: nombre,
      items: itemsIds,
      status: "borrador"
    }
    updatePlantilla(instance, plantilla._id, data, token).then((res) => {
      if (res === 'error') throw new Error('error')
      Swal.fire({
        icon: 'success',
        title: 'Guardado',
        text: 'La plantilla se ha guardado correctamente',
      }).then(() => {
        router.push('/dashboard')
      })
    }).catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo guardar la plantilla ' + err,
      }).then(() => {
        console.log(err)
      })
    })
  }

  function handleSolicitarAprobacion() {
    const itemsIds = items.map((item) => {
      return {
        _id: item.itemId
      }
    })
    const data = {
      nombre: nombre,
      items: itemsIds,
      status: "revision"
    }
    updatePlantilla(instance, plantilla._id, data, token).then((res) => {
      if (res === 'error') throw new Error('error')
      Swal.fire({
        icon: 'success',
        title: 'Guardado',
        text: 'La plantilla se guardó y se ha enviado a revision correctamente',
      }).then(() => {
        router.push('/dashboard')
      })
    }).catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo guardar la plantilla ' + err,
      }).then(() => {
        console.log(err)
      })
    })
  }

  const handleEliminarPlantilla = () => {
    Swal.fire({
      title: "Eliminar",
      text: "¿Confirmas la eliminacion?",
      icon: "question",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePlantilla(instance, id, token).then(
          (res) => {
            Swal.fire({
              icon: 'success',
              title: 'Eliminado',
              text: 'La plantilla se eliminó correctamente',
            }).then(() => {
              router.push('/dashboard')
            })
          }
        )
      }
    })
  }


  return (mounted &&
    <DndContext sensors={sensors}>
      <main className="flex flex-col w-full h-[96%]">
        <nav
          className={`flex justify-between border-b-2 p-4 gap-3 items-center text-light-texto dark:text-dark-texto ${daltonismo === "normal"
            ? "border-light-acento-2/60 dark:border-dark-acento-2/60"
            : daltonismo === "protanopia"
              ? "border-protanopia-light-acento-2/60 dark:border-protanopia-dark-acento-2/50"
              : daltonismo === "deuteranopia"
                ? "border-deuteranopia-light-acento-2/60 dark:border-deuteranopia-dark-acento-2/60"
                : "border-tritanopia-light-acento-2/60 dark:border-tritanopia-dark-acento-2/50"
            }`}
        >
          <h2 className="flex flex-row justify-center items-center gap-2 truncate font-medium">
            <span className="">Plantilla: </span>
            <Input
              type="text"
              onChange={handleChangeNombre}
              value={nombre}
              placeholder="Nombre de la plantilla"
              className="dark:bg-[#333] border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </h2>
          <div className="flex items-center gap-2">
            <Button onClick={handleEliminarPlantilla} className="p-2  font-medium border border-light-texto dark:border-dark-texto">
              Eliminar Plantilla
            </Button>
            <Button onClick={handleGuardarySalir} className="p-2  font-medium border border-light-texto dark:border-dark-texto">
              Guardar y salir
            </Button>
            {plantilla.status !== 'aprobada' && (
              <>
                <Button onClick={handleSolicitarAprobacion} className="p-2  font-medium border border-light-texto dark:border-dark-texto">
                  Solicitar Aprobacion
                </Button>
              </>
            )}
          </div>
        </nav>
        <div className="flex w-full flex-grow items-center justify-center relative overflow-y-auto min-h-full bg-zinc-200 dark:bg-[#4d4d4d] bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)]">
          <Designer mounted={mounted} />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  );
}

export default PlantillaBuilder;
