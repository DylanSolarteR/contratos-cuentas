"use client";

import PlantillaBuilder from "@/components/PlantillaBuilder";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
function BuilderPlanillas({ params }) {
  const { id } = params;
  const router = useRouter();
  let token = "";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!id) {
      router.push("/dashboard");
    }
    token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      setMounted(true);
    }

  }, []);
  return mounted ? (
    <PlantillaBuilder
      id={id}
    />
  ) : <div className="h-screen w-screen">
    <Loading />
  </div>;
}



export default BuilderPlanillas;
