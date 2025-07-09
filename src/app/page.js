"use client";
import { useAppContext } from "@/context";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
  const { daltonismo } = useAppContext();

  return (
    <main
      className={`flex h-full flex-col items-center px-10 md:px-36 py-4 bg-light-fondo dark:bg-dark-fondo`}
    >
      <h1
        className={`text-3xl md:text-5xl font-bold py-2 md:py-10 max-w-7xl w-full text-center mx-auto text-shadow-sm ${
          daltonismo === "normal"
            ? "text-light-texto dark:text-dark-texto"
            : daltonismo === "protanopia"
            ? "text-protanopia-light-texto dark:text-protanopia-dark-texto"
            : daltonismo === "deuteranopia"
            ? "text-deuteranopia-light-texto dark:text-deuteranopia-dark-texto"
            : "text-tritanopia-light-texto dark:text-tritanopia-dark-texto"
        }

          ${
            daltonismo === "normal"
              ? " shadow-light-acento-2 dark:shadow-dark-acento-2"
              : daltonismo === "protanopia"
              ? "shadow-protanopia-light-acento-2 dark:shadow-protanopia-dark-acento-2"
              : daltonismo === "deuteranopia"
              ? "shadow-deuteranopia-light-acento-2 dark:shadow-deuteranopia-dark-acento-2"
              : "shadow-tritanopia-light-acento-2 dark:shadow-tritanopia-dark-acento-2"
          }`}
      >
        Generador Automatizado de Contratos
      </h1>

      <Image
        src="https://img.freepik.com/fotos-premium/vista-panoramica-contrato-comercial-firma-ejecutiva-empresa-socio-comercial-asesor-legal-mesa-reuniones-corporativas-gente-negocios-negociando-acuerdo-concepto-sala-conferencias-prodigy_31965-201339.jpg?w=1480"
        alt="Land1"
        width={1280}
        height={1000}
        sizes="(min-width: 1040px) 800px, calc(96.11vw - 180px)"
        className={`rounded-sm mx-auto shadow-md ${
          daltonismo === "normal"
            ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
            : daltonismo === "protanopia"
            ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
            : daltonismo === "deuteranopia"
            ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
            : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
        }`}
        priority={true}
      />

      <h2
        className={`text-base md:text-3xl py-6 sm:py-5 md:py-10 max-w-7xl w-full text-center mx-auto rounded text-shadow ${
          daltonismo === "normal"
            ? " shadow-light-acento-2 dark:shadow-dark-acento-2"
            : daltonismo === "protanopia"
            ? "shadow-protanopia-light-acento-2 dark:shadow-protanopia-dark-acento-2"
            : daltonismo === "deuteranopia"
            ? "shadow-deuteranopia-light-acento-2 dark:shadow-deuteranopia-dark-acento-2"
            : "shadow-tritanopia-light-acento-2 dark:shadow-tritanopia-dark-acento-2"
        } `}
      >
        Una solución práctica para la gestion de tus contratos
      </h2>

      <section
        className={`relative flex md:flex-row flex-col gap-10 my-2 p-10 justify-around rounded w-full max-w-7xl border-b-4
          ${
            daltonismo === "normal"
              ? "text-light-texto border-b-light-acento-2 dark:text-dark-texto dark:border-b-dark-acento-2"
              : daltonismo === "protanopia"
              ? "text-protanopia-light-texto border-b-protanopia-light-acento-2 dark:text-protanopia-dark-texto dark:border-b-protanopia-dark-acento-2"
              : daltonismo === "deuteranopia"
              ? "text-deuteranopia-light-texto border-b-deuteranopia-light-acento-2 dark:text-deuteranopia-dark-texto dark:border-b-deuteranopia-dark-acento-2"
              : "text-tritanopia-light-texto border-b-tritanopia-light-acento-2 dark:text-tritanopia-dark-texto dark:border-b-tritanopia-dark-acento-2"
          } border-t-4
          ${
            daltonismo === "normal"
              ? "text-light-texto border-t-light-acento-2 dark:text-dark-texto dark:border-t-dark-acento-2"
              : daltonismo === "protanopia"
              ? "text-protanopia-light-texto border-t-protanopia-light-acento-2 dark:text-protanopia-dark-texto dark:border-t-protanopia-dark-acento-2"
              : daltonismo === "deuteranopia"
              ? "text-deuteranopia-light-texto border-t-deuteranopia-light-acento-2 dark:text-deuteranopia-dark-texto dark:border-t-deuteranopia-dark-acento-2"
              : "text-tritanopia-light-texto border-t-tritanopia-light-acento-2 dark:text-tritanopia-dark-texto dark:border-t-tritanopia-dark-acento-2"
          }
          `}
      >
        <article className="relative flex md:flex-col flex-row gap-2 justify-around items-center">
          <Image
            src="https://img.freepik.com/vector-premium/documento-electronico-papel-electronico-oficina-papel-articulo-internet-escribir-archivo-texto-computadora_566886-2358.jpg?w=1380"
            alt="Land2"
            className={`rounded-lg mx-auto max-w-[300px] max-h-[200px] w-full h-full shadow-md ${
              daltonismo === "normal"
                ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
                : daltonismo === "protanopia"
                ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
                : daltonismo === "deuteranopia"
                ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
            }`}
            width={1280}
            height={1000}
            priority={true}
          />
          <h3
            className={`text-center max-w-[300px] py-2 text-semibold md:text-xl text-sm text-shadow-lg ${
              daltonismo === "normal"
                ? "text-light-texto shadow-light-acento-2 dark:text-dark-texto dark:shadow-dark-acento-2"
                : daltonismo === "protanopia"
                ? "text-protanopia-light-texto shadow-protanopia-light-acento-2 dark:text-protanopia-dark-texto dark:shadow-protanopia-dark-acento-2"
                : daltonismo === "deuteranopia"
                ? "text-deuteranopia-light-texto shadow-deuteranopia-light-acento-2 dark:text-deuteranopia-dark-texto dark:shadow-deuteranopia-dark-acento-2"
                : "text-tritanopia-light-texto shadow-tritanopia-light-acento-2 dark:text-tritanopia-dark-texto dark:shadow-tritanopia-dark-acento-2"
            }`}
          >
            Administra y crea de forma eficiente tus contratos
          </h3>
        </article>
        <article className="relative flex md:flex-col flex-row gap-2 justify-around items-center">
          <Image
            src="https://www.bizneo.com/blog/wp-content/uploads/2023/05/nota-de-gastos-810x455.jpg"
            alt="Land2"
            className={`rounded-lg mx-auto max-w-[300px] max-h-[200px] w-full h-full shadow-md ${
              daltonismo === "normal"
                ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
                : daltonismo === "protanopia"
                ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
                : daltonismo === "deuteranopia"
                ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
            }`}
            width={1280}
            height={400}
            priority={true}
          />
          <h3
            className={`text-center max-w-[300px] py-2 text-semibold md:text-xl text-sm text-shadow-lg ${
              daltonismo === "normal"
                ? "text-light-texto shadow-light-acento-2 dark:text-dark-texto dark:shadow-dark-acento-2"
                : daltonismo === "protanopia"
                ? "text-protanopia-light-texto shadow-protanopia-light-acento-2 dark:text-protanopia-dark-texto dark:shadow-protanopia-dark-acento-2"
                : daltonismo === "deuteranopia"
                ? "text-deuteranopia-light-texto shadow-deuteranopia-light-acento-2 dark:text-deuteranopia-dark-texto dark:shadow-deuteranopia-dark-acento-2"
                : "text-tritanopia-light-texto shadow-tritanopia-light-acento-2 dark:text-tritanopia-dark-texto dark:shadow-tritanopia-dark-acento-2"
            }`}
          >
            Administra y crea de forma eficiente tus contratos
          </h3>
        </article>
        <article className="relative flex md:flex-col flex-row gap-2 justify-around items-center">
          <Image
            src="https://i0.wp.com/wabarnews.org/wp-content/uploads/2021/11/Nov2021_scoop.jpg?fit=1200%2C675&ssl=1"
            alt="Land2"
            className={`rounded-lg mx-auto max-w-[300px] max-h-[200px] w-full h-full shadow-md ${
              daltonismo === "normal"
                ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
                : daltonismo === "protanopia"
                ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
                : daltonismo === "deuteranopia"
                ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
            }`}
            width={1280}
            height={1000}
            priority={true}
          />
          <h3
            className={`text-center max-w-[300px] py-2 text-semibold md:text-xl text-sm text-shadow-lg ${
              daltonismo === "normal"
                ? "text-light-texto shadow-light-acento-2 dark:text-dark-texto dark:shadow-dark-acento-2"
                : daltonismo === "protanopia"
                ? "text-protanopia-light-texto shadow-protanopia-light-acento-2 dark:text-protanopia-dark-texto dark:shadow-protanopia-dark-acento-2"
                : daltonismo === "deuteranopia"
                ? "text-deuteranopia-light-texto shadow-deuteranopia-light-acento-2 dark:text-deuteranopia-dark-texto dark:shadow-deuteranopia-dark-acento-2"
                : "text-tritanopia-light-texto shadow-tritanopia-light-acento-2 dark:text-tritanopia-dark-texto dark:shadow-tritanopia-dark-acento-2"
            }`}
          >
            Administra y crea de forma eficiente tus contratos
          </h3>
        </article>
      </section>

      <section
        className={`relative flex lg:flex-row flex-col gap-4 my-6 p-10 justify-center items-center rounded-lg w-full max-w-7xl ${
          daltonismo === "normal"
            ? "bg-light-acento-1  dark:bg-dark-acento-1"
            : daltonismo === "protanopia"
            ? "bg-protanopia-light-acento-1 dark:bg-protanopia-dark-acento-1"
            : daltonismo === "deuteranopia"
            ? "bg-deuteranopia-light-acento-1 dark:bg-deuteranopia-dark-acento-1"
            : "bg-tritanopia-light-acento-1 dark:bg-tritanopia-dark-acento-1"
        } 
          `}
      >
        <h2
          className={`text-2xl md:text-4xl font-extrabold py-6 max-w-7xl  text-center  rounded-lg `}
        >
          ¿Qué esperas para comenzar?
        </h2>
        <div className="flex flex-row justify-center items-center">
          <Link href={"/login"}>
            <Button
              variant="default"
              className={`w-fit h-fit max-w-[100%] md:text-4xl text-2xl p-2 font-extrabold bg-light-fondo  dark:bg-dark-fondo shadow-lg shadow-light-texto dark:shadow-dark-texto`}
            >
              ¡Comienza Ya!
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
