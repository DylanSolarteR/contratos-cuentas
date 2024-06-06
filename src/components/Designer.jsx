"use client"
import DesignerSidebar from "@/components/DesignerSidebar";
import { useAppContext } from "@/context";
import { cn } from "@/lib/utils";
import { useDndMonitor, useDraggable, useDroppable } from "@dnd-kit/core";
import DesignerItem from "./DesignerItem";
import { useState } from "react";
import { Trash } from 'lucide-react'
import { Button } from "./ui/button";
import { idGenerator } from "@/lib/idGenerator";
import { arrayMove } from "@dnd-kit/sortable";

function Designer({ mounted }) { // El cuadro grande en el centro

    const { items, setItems, addItem } = useAppContext()
    const droppable = useDroppable({
        id: "designer-drop-area",
        data: { isDesignerDropArea: true }
    })

    useDndMonitor({
        onDragEnd(event) {
            const { active, over } = event;
            if (!active || !over) return;


            const isDesignerBtnItem = active.data?.current?.isDesignerBtnItem
            const isDroppingOverDesignerDropArea = over.data?.current?.isDesignerDropArea

            const droppingSidebarItemOverDesignerDropArea = isDesignerBtnItem && isDroppingOverDesignerDropArea
            //Primer escenario
            if (droppingSidebarItemOverDesignerDropArea) {
                addItem(items.length, { id: idGenerator(), itemId: active.id, titulo: active.data.current.titulo, contenido: active.data.current.contenido })
                return;
            }
            const isDroppingOverDesignerItemTopHalf = over.data?.current?.isTopHalfDesignerItem;
            const isDroppingOverDesignerItemBottomHalf = over.data?.current?.isBottomHalfDesignerItem;
            const isDroppingOverDesignerItem = isDroppingOverDesignerItemTopHalf || isDroppingOverDesignerItemBottomHalf;
            const droppingSideBarItemOverDesignerItem = isDesignerBtnItem && isDroppingOverDesignerItem;

            //Segundo escenario
            if (droppingSideBarItemOverDesignerItem) {
                const overId = over.data?.current?.itemId;

                const overItemIndex = items.findIndex((item) => item.id === overId);
                if (overItemIndex === -1) throw new Error("No se encontro el item sobre el que se esta soltando");


                let indexForNewItem = overItemIndex
                if (isDroppingOverDesignerItemBottomHalf) indexForNewItem += 1


                addItem(indexForNewItem, { id: idGenerator(), itemId: active.id, titulo: active.data?.current?.titulo, contenido: active.data?.current?.contenido })
                return;
            }

            //Tercer escenario
            const isDraggingDesignerItem = active.data?.current?.isDesignerItem;

            const draggingDesignerItemOverAnotherDesignerItem = isDroppingOverDesignerItem && isDraggingDesignerItem;

            if (draggingDesignerItemOverAnotherDesignerItem) {
                const activeId = active.data?.current?.itemId;
                const overId = over.data?.current?.itemId;

                const activeItemIndex = items.findIndex((item) => item.id === activeId);
                const overItemIndex = items.findIndex((item) => item.id === overId);

                if (activeItemIndex === -1 || overItemIndex === -1) throw new Error("No se encontro el item sobre el que se esta soltando");

                let array = [...items]

                let indexForNewItem = overItemIndex
                if (isDroppingOverDesignerItemBottomHalf) indexForNewItem += 1

                array = arrayMove(array, activeItemIndex, indexForNewItem)
                setItems(array)
            }
        },
    })

    return (mounted &&
        <div className="flex w-full h-full">
            <div className="p-4 w-full">
                <div
                    ref={droppable.setNodeRef}
                    className={cn("bg-light-fondo dark:bg-dark-fondo max-w-[1100px] h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto", droppable.isOver && "ring-4 ring-light-texto/50 dark:ring-dark-texto/50")}>
                    {!droppable.isOver && items.length === 0 &&
                        <p className="text-3xl text-light-texto dark:text-dark-texto flex flex-grow items-center font-bold">
                            Suelte aca
                        </p>}

                    {items.length > 0 && (
                        <div className="flex flex-col w-full gap-2 p-4">
                            {items.map((item, index) => (
                                <DesignerItemWrapper key={index} item={item} />
                            ))}
                        </div>
                    )}
                    {droppable.isOver && items.length === 0 && (
                        <div className="p-4 w-full">
                            <div className="h-[120px] rounded-md bg-light-texto/20 dark:bg-dark-texto/20"></div>
                        </div>

                    )}
                </div>
            </div>
            <DesignerSidebar />
        </div>
    )
}

function DesignerItemWrapper({ item }) {


    const [mouseIsOver, setMouseIsOver] = useState(false)
    const { removeItemByRandomId } = useAppContext()
    const topHalf = useDroppable({
        id: `${item.id}-top-half`,
        data: { isTopHalfDesignerItem: true, itemId: item.id }
    })

    const bottomHalf = useDroppable({
        id: `${item.id}-bottom-half`,
        data: { isBottomHalfDesignerItem: true, itemId: item.id }
    })

    const draggable = useDraggable({
        id: item.id + "-drag-handler",
        data: { isDesignerItem: true, itemId: item.id }
    })

    if (draggable.isDragging) {
        return null
    }



    return (
        <div
            ref={draggable.setNodeRef}
            {...draggable.attributes}
            {...draggable.listeners}
            className="relative h-fit flex flex-col hover:cursor-pointer rouned-md ring-1 ring-accent ring-inset"
            onMouseEnter={() => setMouseIsOver(true)}
            onMouseLeave={() => setMouseIsOver(false)}
        >
            <div ref={topHalf.setNodeRef} className={cn("absolute w-full h-1/2 rounded-t-md", topHalf.isOver && "border-t-8 border-light-texto dark:border-dark-texto")}></div>
            <div ref={bottomHalf.setNodeRef} className={cn("absolute w-full bottom-0 h-1/2 rounded-b-md", bottomHalf.isOver && "border-b-8 border-light-texto dark:border-dark-texto")}></div>
            {mouseIsOver && (
                <div className="absolute right-0 h-full ">
                    <Button variant="delete" className="flex justify-center items-center h-full border border-red-500 bg-red-500 hover:bg-red-500/50 rounded-md rounded-l-none"
                        onClick={() => {
                            removeItemByRandomId(item.id)
                        }}
                    >
                        <Trash className="h-6 w-6" />
                    </Button>
                </div>
            )}
            <DesignerItem id={item.id} titulo={item.titulo} contenido={item.contenido} />

        </div>
    )
}


export default Designer