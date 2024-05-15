"use client";
import { useAppContext } from "@/context";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Designer from "@/components/Designer";
import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import DragOverlayWrapper from "./DragOverlayWrapper";
import { Mouse } from "lucide-react";


function PlantillaBuilder({ plantilla }) {
  const { daltonismo } = useAppContext();
  const [nombre, setNombre] = useState(plantilla.nombre);
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


  return (
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
            <Button className="p-2  font-medium border border-light-texto dark:border-dark-texto">
              Guardar
            </Button>
            {!plantilla.aprobada && (
              <>
                <Button className="p-2  font-medium border border-light-texto dark:border-dark-texto">
                  Solicitar Aprobacion
                </Button>
              </>
            )}
          </div>
        </nav>
        <div className="flex w-full flex-grow items-center justify-center relative overflow-y-auto min-h-full bg-zinc-200 dark:bg-[#4d4d4d] bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)]">
          <Designer />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  );
}

export default PlantillaBuilder;
