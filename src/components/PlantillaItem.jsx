"use client";

import { useDraggable } from "@dnd-kit/core";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

function PlantillaItem({ id, titulo, contenido }) { //El item en el sidebar
    const draggable = useDraggable({
        id: id,
        data: { isDesignerBtnItem: true, titulo, contenido }
    })

    return (
        <Button
            ref={draggable.setNodeRef}
            variant="outline"
            className={cn("flex flex-col gap-2 w-full h-fit cursor-grab border border-light-texto dark:border-dark-texto", draggable.isDragging && "ring-2 ring-primary")}
            {...draggable.listeners}
            {...draggable.attributes}
        >
            <span className="text-base font-bold border-b border-b-light-texto/60 dark:border-b-dark-texto/60 w-full py-2">{titulo}</span>
            <div className="text-justify text-sm w-full text-wrap overflow-y-auto max-h-32">{contenido}</div>
        </Button>
    )
}

export function PlantillaItemDragOverlay({ id, titulo, contenido }) { //El draggable que aparece mientras se mueve
    const draggable = useDraggable({
        id: id,
        data: { isDesignerBtnItem: true, titulo, contenido }
    })

    return (
        <Button
            variant="outline"
            className="flex flex-col w-full h-fit cursor-grab"
        >
            <span className="text-base font-bold">{titulo}</span>
            <div className="flex text-justify text-sm w-full text-wrap overflow-y-auto max-h-32">{contenido}</div>
        </Button>
    )
}

export default PlantillaItem