"use client";
import { useAppContext } from "@/context";

import Link from "next/link";

export default function historial() {
  const { daltonismo } = useAppContext();
  return (
    <div className="w-screen h-[90vh] align-middle">
      <main className="flex h-full flex-col items-center px-10 md:px-36 py-4 bg-light-fondo dark:bg-dark-fondo">
        <div
          className={`grid min-h-full w-full grid-rows-2 grid-cols-1 place-items-center p-6 rounded-lg text-shadow-sm ${
            daltonismo === "normal"
              ? "text-light-texto shadow-light-acento-1 dark:text-dark-texto dark:shadow-dark-acento-1"
              : daltonismo === "protanopia"
              ? "text-protanopia-light-texto shadow-protanopia-light-acento-1 dark:text-protanopia-dark-texto dark:shadow-protanopia-dark-acento-1"
              : daltonismo === "deuteranopia"
              ? "text-deuteranopia-light-texto shadow-deuteranopia-light-acento-1 dark:text-deuteranopia-dark-texto dark:shadow-deuteranopia-dark-acento-1"
              : "text-tritanopia-light-texto shadow-tritanopia-light-acento-1 dark:text-tritanopia-dark-texto dark:shadow-tritanopia-dark-acento-1"
          }`}
        >
          <div
            class={`max-w-lg p-6 rounded-lg ${
              daltonismo === "normal"
                ? "bg-light-acento-2  dark:bg-dark-acento-2"
                : daltonismo === "protanopia"
                ? "bg-protanopia-light-acento-2 dark:bg-protanopia-dark-acento-2"
                : daltonismo === "deuteranopia"
                ? "bg-deuteranopia-light-acento-2 dark:bg-deuteranopia-dark-acento-2"
                : "bg-tritanopia-light-acento-2 dark:bg-tritanopia-dark-acento-2"
            }  shadow-lg ${
              daltonismo === "normal"
                ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
                : daltonismo === "protanopia"
                ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
                : daltonismo === "deuteranopia"
                ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
            }`}
          >
            <Link href="/dashboard/contratos">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-ligth-texto dark:text-dark-texto">
                Ver contratos
              </h5>
            </Link>
            <p class="mb-3 font-normal text-ligth-texto dark:text-dark-texto text-shadow">
              Aquí puedes revisar todos los contratos que hayas generado hasta
              el momento.
            </p>
            <Link
              href="/dashboard/contratos"
              className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-light-texto dark:text-dark-texto rounded-lg focus:outline-none ${
                daltonismo === "normal"
                  ? "bg-light-acento-2  dark:bg-dark-acento-2"
                  : daltonismo === "protanopia"
                  ? "bg-protanopia-light-acento-2 dark:bg-protanopia-dark-acento-2"
                  : daltonismo === "deuteranopia"
                  ? "bg-deuteranopia-light-acento-2 dark:bg-deuteranopia-dark-acento-2"
                  : "bg-tritanopia-light-acento-2 dark:bg-tritanopia-dark-acento-2"
              } 
              ${
                daltonismo === "normal"
                  ? "hover:bg-light-acento-1  dark:hover:bg-dark-acento-1"
                  : daltonismo === "protanopia"
                  ? "hover:bg-protanopia-light-acento-1 hover:dark:bg-protanopia-dark-acento-1"
                  : daltonismo === "deuteranopia"
                  ? "hover:bg-deuteranopia-light-acento-1 hover:dark:bg-deuteranopia-dark-acento-1"
                  : "hover:bg-tritanopia-light-acento-1 hover:dark:bg-tritanopia-dark-acento-1"
              } shadow-md ${
                daltonismo === "normal"
                  ? "shadow-light-acento-1 dark:shadow-dark-acento-1"
                  : daltonismo === "protanopia"
                  ? "shadow-protanopia-light-acento-1 dark:shadow-protanopia-dark-acento-1"
                  : daltonismo === "deuteranopia"
                  ? "shadow-deuteranopia-light-acento-1 dark:shadow-deuteranopia-dark-acento-1"
                  : "shadow-tritanopia-light-acento-1 dark:shadow-tritanopia-dark-acento-1"
              }
              `}
            >
              Ver
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
          <div
            class={`max-w-lg p-6 bg-light-acento-2 rounded-lg dark:bg-dark-acento-2 dark:border-gray-700 ${
              daltonismo === "normal"
                ? "bg-light-acento-2  dark:bg-dark-acento-2"
                : daltonismo === "protanopia"
                ? "bg-protanopia-light-acento-2 dark:bg-protanopia-dark-acento-2"
                : daltonismo === "deuteranopia"
                ? "bg-deuteranopia-light-acento-2 dark:bg-deuteranopia-dark-acento-2"
                : "bg-tritanopia-light-acento-2 dark:bg-tritanopia-dark-acento-2"
            } shadow-lg ${
              daltonismo === "normal"
                ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
                : daltonismo === "protanopia"
                ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
                : daltonismo === "deuteranopia"
                ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
            }`}
          >
            <Link href="/dashboard/cuentas">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-ligth-texto dark:text-dark-texto">
                Ver cuentas de cobro
              </h5>
            </Link>
            <p class="mb-3 font-normal text-ligth-texto dark:text-dark-texto text-shadow">
              Aquí puedes revisar todas las cuentas de cobro que hayas generado
              hasta el momento.
            </p>
            <Link
              href="/dashboard/cuentas"
              className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-light-texto dark:text-dark-texto rounded-lg focus:outline-none ${
                daltonismo === "normal"
                  ? "bg-light-acento-2  dark:bg-dark-acento-2"
                  : daltonismo === "protanopia"
                  ? "bg-protanopia-light-acento-2 dark:bg-protanopia-dark-acento-2"
                  : daltonismo === "deuteranopia"
                  ? "bg-deuteranopia-light-acento-2 dark:bg-deuteranopia-dark-acento-2"
                  : "bg-tritanopia-light-acento-2 dark:bg-tritanopia-dark-acento-2"
              } 
              ${
                daltonismo === "normal"
                  ? "hover:bg-light-acento-1  dark:hover:bg-dark-acento-1"
                  : daltonismo === "protanopia"
                  ? "hover:bg-protanopia-light-acento-1 hover:dark:bg-protanopia-dark-acento-1"
                  : daltonismo === "deuteranopia"
                  ? "hover:bg-deuteranopia-light-acento-1 hover:dark:bg-deuteranopia-dark-acento-1"
                  : "hover:bg-tritanopia-light-acento-1 hover:dark:bg-tritanopia-dark-acento-1"
              } shadow-md ${
                daltonismo === "normal"
                  ? "shadow-light-acento-1 dark:shadow-dark-acento-1"
                  : daltonismo === "protanopia"
                  ? "shadow-protanopia-light-acento-1 dark:shadow-protanopia-dark-acento-1"
                  : daltonismo === "deuteranopia"
                  ? "shadow-deuteranopia-light-acento-1 dark:shadow-deuteranopia-dark-acento-1"
                  : "shadow-tritanopia-light-acento-1 dark:shadow-tritanopia-dark-acento-1"
              }
              `}
            >
              Ver
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
