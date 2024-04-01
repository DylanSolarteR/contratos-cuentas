"use client";
import { useAppContext } from "@/context";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  const { daltonismo } = useAppContext();

  return (
    <div>
      <Navbar />
      <main
        className={`flex min-h-full flex-col items-center px-24 py-10 bg-light-fondo dark:bg-dark-fondo`}
      >
        <h1
          className={`text-5xl font-bold py-10 ${
            daltonismo === "normal"
              ? "text-light-texto dark:text-dark-texto"
              : daltonismo === "protanopia"
              ? "text-protanopia-light-texto dark:text-protanopia-dark-texto"
              : daltonismo === "deuteranopia"
              ? "text-deuteranopia-light-texto dark:text-deuteranopia-dark-texto"
              : "text-tritanopia-light-texto dark:text-tritanopia-dark-texto"
          }`}
        >
          Contratos y Cuentas de Cobro
        </h1>

        <Image
          src="https://img.freepik.com/fotos-premium/vista-panoramica-contrato-comercial-firma-ejecutiva-empresa-socio-comercial-asesor-legal-mesa-reuniones-corporativas-gente-negocios-negociando-acuerdo-concepto-sala-conferencias-prodigy_31965-201339.jpg?w=1480"
          alt="Land1"
          width={1280}
          height={1000}
          sizes="(min-width: 1040px) 800px, calc(96.11vw - 180px)"
          className={`rounded-sm bg-red-500 mx-auto`}
          priority={true}
        />

        <h2
          className={`text-3xl py-10 border-b-4 max-w-7xl w-full text-center
          ${
            daltonismo === "normal"
              ? "text-light-texto border-b-light-acento-1 dark:text-dark-texto dark:border-b-dark-acento-1"
              : daltonismo === "protanopia"
              ? "text-protanopia-light-texto border-b-protanopia-light-acento-1 dark:text-protanopia-dark-texto dark:border-b-protanopia-dark-acento-1"
              : daltonismo === "deuteranopia"
              ? "text-deuteranopia-light-texto border-b-deuteranopia-light-acento-1 dark:text-deuteranopia-dark-texto dark:border-b-deuteranopia-dark-acento-1"
              : "text-tritanopia-light-texto border-b-tritanopia-light-acento-1 dark:text-tritanopia-dark-texto dark:border-b-tritanopia-dark-acento-1"
          }`}
        >
          Una solución práctica para la gestion de tus contratos y cuentas
        </h2>

        <p
          className={`text-lg ${
            daltonismo === "normal"
              ? "text-light-acento-1 dark:text-dark-acento-1"
              : daltonismo === "protanopia"
              ? "text-protanopia-light-acento-1 dark:text-protanopia-dark-acento-1"
              : daltonismo === "deuteranopia"
              ? "text-deuteranopia-light-acento-1 dark:text-deuteranopia-dark-acento-1"
              : "text-tritanopia-light-acento-1 dark:text-tritanopia-dark-acento-1"
          }`}
        >
          Acento 1
        </p>
      </main>
    </div>
  );
}
