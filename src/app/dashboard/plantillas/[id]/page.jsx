"use client";

import PlantillaBuilder from "@/components/PlantillaBuilder";
function BuilderPlanillas({ params }) {
  const { id } = params;
  return (
    <PlantillaBuilder
      id={id}
    //   plantilla={{nombre:"Plantilla 1", 
    //   status: "borrador",
    //   items: [
    //     {
    //       titulo: 'Titulo',
    //       tipo: 'clausula',
    //       contenido: 'Contenido'
    //     }
    //   ]
    // }}
    />
  );
}



export default BuilderPlanillas;
