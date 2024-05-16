"use client";

import PlantillaBuilder from "@/components/PlantillaBuilder";
function BuilderPlanillas({ params }) {
  const { id } = params;
  return (
    <PlantillaBuilder
      id={id}
    />
  );
}



export default BuilderPlanillas;
