"use client";
import DashboardCard from "@/components/DashboardCard";

export default function historial() {
  
  return (
    <div className="w-screen h-[92vh] flex flex-col justify-center items-center">
      <main className="flex h-full flex-col items-center justify-center gap-6 px-10 md:px-36 py-10 bg-light-fondo dark:bg-dark-fondo">
        <DashboardCard title={'Ver contratos'} desc={"Aquí puedes revisar todos los contratos que hayas generado hasta el momento."} refLink={"/dashboard/contratos"}></DashboardCard>
        <DashboardCard title={'Ver cuentas de cobro'} desc={"Aquí puedes revisar todas las cuentas de cobro que hayas generado hasta el momento."} refLink={"/dashboard/cuentas"}></DashboardCard>
      </main>
    </div>
  );
}
