"use client";
import { useAppContext } from "@/context";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Home() {
  const router = useRouter();
  const { daltonismo, instance } = useAppContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {

    if ( email.length > 0 && password.length > 0){

      instance
        .post("/auth/login", {
          email: email,
          password: password,
        })
        .then((result) => {
          if (result.status === 200) {
            localStorage.setItem("token", result.data.token);
            router.push("/dashboard");
          }
        })
        .catch((err) => {
          Swal.fire({
            title: "Error de inicio de sesión",
            text: err,
            icon: "error",
            confirmButtonText: "OK",
          });
        });
    }else{
      Swal.fire({
        title: "Error",
        text: "Por favor rellene todos los campos",
        icon: "error",
      });
    }
  };
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
          <h2 className="text-2xl font-bold">Iniciar sesión</h2>
          <div
            class={`w-fit m-auto h-fit rounded-lg flex flex-col justify-center items-center p-4 gap-4 shadow-md bg-neutral-200/30 dark:bg-dark-fondo dark:shadow-lg border ${
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
              <label className="font-semibold">Correo</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                id="email"
                name="email"
                placeholder="Ingrese su correo"
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
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
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Button
                onClick={onSubmit}
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
                Acceder
              </Button>
            </div>
            <div className="flex flex-row justify-center items-center text-center">
              <p>
                ¿No tienes una cuenta?{" "}
                <Link
                  href="/register"
                  className="text-light-texto dark:text-dark-texto underline font-semibold"
                >
                  Regístrate
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
