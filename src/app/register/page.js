"use client";
import { useAppContext } from "@/context";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Home() {
  const { daltonismo } = useAppContext();

  return (
    <div>
      <main
        className={`flex flex-col h-[90vh] items-center justify-center px-4 md:px-36 py-4 bg-light-fondo dark:bg-dark-fondo text-shadow-sm ${
          daltonismo === "normal"
            ? "text-light-texto shadow-light-acento-2 dark:text-dark-texto dark:shadow-dark-acento-2"
            : daltonismo === "protanopia"
            ? "text-protanopia-light-texto shadow-protanopia-light-acento-2 dark:text-protanopia-dark-texto dark:shadow-protanopia-dark-acento-2"
            : daltonismo === "deuteranopia"
            ? "text-deuteranopia-light-texto shadow-deuteranopia-light-acento-2 dark:text-deuteranopia-dark-texto dark:shadow-deuteranopia-dark-acento-2"
            : "text-tritanopia-light-texto shadow-tritanopia-light-acento-2 dark:text-tritanopia-dark-texto dark:shadow-tritanopia-dark-acento-2"
        }`}
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="text-2xl font-bold">Registro</h2>
          <div
            class={`w-fit m-auto h-fit rounded-lg flex flex-col justify-center items-center p-4 gap-5  shadow-md bg-neutral-200/30 dark:bg-dark-fondo dark:shadow-lg border ${
              daltonismo === "normal"
                ? "border-light-acento-2/10 dark:border-dark-acento-2/10"
                : daltonismo === "protanopia"
                ? "border-protanopia-light-acento-2/10 dark:border-protanopia-dark-acento-2/1"
                : daltonismo === "deuteranopia"
                ? "border-deuteranopia-light-acento-2/10 dark:border-deuteranopia-dark-acento-2/10"
                : "border-tritanopia-light-acento-2/10 dark:border-tritanopia-dark-acento-2/1"
            }
            ${
              daltonismo === "normal"
                ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
                : daltonismo === "protanopia"
                ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
                : daltonismo === "deuteranopia"
                ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
            }
            `}
          >
            <div class=" flex flex-col justify-start items-start gap-2">
              <label className="font-semibold">Usuario</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Ingrese su usuario"
                required
                className={`text-center rounded-md shadow ${
                  daltonismo === "normal"
                    ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
                    : daltonismo === "protanopia"
                    ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
                    : daltonismo === "deuteranopia"
                    ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                    : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
                }`}
              />
            </div>
            <div class="flex flex-col justify-start items-start gap-2">
              <label className="font-semibold">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Ingrese su contraseña"
                required
                className={`text-center rounded-md shadow ${
                  daltonismo === "normal"
                    ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
                    : daltonismo === "protanopia"
                    ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
                    : daltonismo === "deuteranopia"
                    ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                    : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
                } `}
              />
              <p className="text-[9px]">
                La contraseña debe contener minimo 8 caracteres.
              </p>
            </div>
            <div class="flex flex-col justify-start items-start gap-2">
              <label className="font-semibold">Confirmar Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Confirme su contraseña"
                required
                className={`text-center rounded-md shadow ${
                  daltonismo === "normal"
                    ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
                    : daltonismo === "protanopia"
                    ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
                    : daltonismo === "deuteranopia"
                    ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                    : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
                } `}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Acceptar terminos y condiciones</Label>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Link href={"/dashboard"}>
                <Button
                  variant="default"
                  className={`rounded-lg font-semibold shadow ${
                    daltonismo === "normal"
                      ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
                      : daltonismo === "protanopia"
                      ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
                      : daltonismo === "deuteranopia"
                      ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                      : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
                  }`}
                >
                  Registrarse
                </Button>
              </Link>
            </div>
            <div className="flex flex-row justify-center items-center text-center">
              <p>
                ¿Ya tienes una cuenta?{" "}
                <Link
                  href="/login"
                  className="text-light-texto dark:text-dark-texto underline font-semibold"
                >
                  Inicia Sesion
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
