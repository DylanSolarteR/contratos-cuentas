"use client";

import React, { useEffect, useState } from "react";
import PlantillaBuilder from "@/components/PlantillaBuilder";
import { useAppContext } from "@/context";

// import { Droppable } from '@/components/dnd/User';
function BuilderPlanillas({ params }) {
  const { addItem } = useAppContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      addItem(0, { id: 'encabezado-1', itemId: "encabezado-1", titulo: 'Encabezado 1', contenido: 'lorem ipsum' })
      setMounted(true);
    }
  }
    , []);

  // const { id } = params;

  // const [items, setItems] = useState([
  //     { id: '1', name: 'Item 1', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam non asperiores blanditiis ut distinctio corporis. Ullam suscipit adipisci id quis ea labore, nostrum, similique harum ad dolores omnis, porro eaque.' },
  //     { id: '2', name: 'Item 2', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam non asperiores blanditiis ut distinctio corporis. Ullam suscipit adipisci id quis ea labore, nostrum, similique harum ad dolores omnis, porro eaque.' },
  //     { id: '3', name: 'Item 3', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam non asperiores blanditiis ut distinctio corporis. Ullam suscipit adipisci id quis ea labore, nostrum, similique harum ad dolores omnis, porro eaque.' },
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
    <PlantillaBuilder
      plantilla={{ nombre: "Plantilla test", aprobada: false }}
    />
  );
}

export default BuilderPlanillas;
