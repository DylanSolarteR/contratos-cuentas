"use client";

import React, { useState } from "react";
import PlantillaBuilder from "@/components/PlantillaBuilder";

import { DndContext, closestCenter } from "@dnd-kit/core";

import Item from "@/components/dnd/Item";
// import { Droppable } from '@/components/dnd/User';
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function BuilderPlanillas({ params }) {
  const { id } = params;
  console.log(id);

  // throw new Error("Error en la carga de la plantilla")

  // const [items, setItems] = useState([
  //     { id: '1', name: 'Item 1', desc: 'Description 1', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam non asperiores blanditiis ut distinctio corporis. Ullam suscipit adipisci id quis ea labore, nostrum, similique harum ad dolores omnis, porro eaque.' },
  //     { id: '2', name: 'Item 2', desc: 'Description 2', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam non asperiores blanditiis ut distinctio corporis. Ullam suscipit adipisci id quis ea labore, nostrum, similique harum ad dolores omnis, porro eaque.' },
  //     { id: '3', name: 'Item 3', desc: 'Description 3', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam non asperiores blanditiis ut distinctio corporis. Ullam suscipit adipisci id quis ea labore, nostrum, similique harum ad dolores omnis, porro eaque.' },
  // ]);

  // const handleDragEnd = (event) => {
  //     const { active, over } = event;
  //     if (!active.id !== over.id) {
  //         setItems((items) => {
  //             const oldIndex = items.findIndex((item) => item.id === active.id);
  //             const newIndex = items.findIndex((item) => item.id === over.id);

  //             return arrayMove(items, oldIndex, newIndex);
  //         });
  //     }
  // };
  return (
    // <div className="flex justify-center items-center">
    //     <main className="w-4/6 flex flex-col gap-4 p-10">
    //         <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
    //             <h1 className="text-2xl font-bold">Items List</h1>
    //             <SortableContext
    //                 items={items}
    //                 strategy={verticalListSortingStrategy}>
    //                 {items.map((item) => (
    //                     <Item key={item.id} item={item} />
    //                 ))}
    //             </SortableContext>
    //         </DndContext>
    //     </main >
    // </div>
    <PlantillaBuilder
      plantilla={{ nombre: "Planilla test", aprobada: false }}
    />
  );
}

export default BuilderPlanillas;
