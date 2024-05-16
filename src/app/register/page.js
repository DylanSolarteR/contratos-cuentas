"use client";
import { useAppContext } from "@/context";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const { daltonismo, instance } = useAppContext();
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [type, setType] = useState("persona");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onSubmit = () => {
    if (password.length > 8 && password == password2) {
      Swal.fire({
        title: "Enviar",
        text: "¿Confirmas el registro?",
        icon: "question",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Confirmar",
      }).then((result) => {
        if (result.isConfirmed) {
          instance
            .post("/auth/signup", {
              tipo: type,
              nombre: name,
              documento: document,
              email: email,
              password: password,
            })
            .then((response) => {
              if (response.status === 200) {
                router.push("/login");
              }
            })
            .catch((err) => {
              Swal.fire({
                title: "Error de registro",
                text: "Datos incorrectos",
                icon: "error",
                confirmButtonText: "OK",
              });
            });
        }
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Las contraseñas no cumplen con los requisitos",
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
              <label className="font-semibold">Nombre</label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                id="name"
                name="name"
                placeholder="Ingrese su nombre"
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
            <div class=" flex flex-col justify-start items-start gap-2">
              <label className="font-semibold">Documento</label>
              <input
                onChange={(e) => {
                  setDocument(e.target.value);
                }}
                type="number"
                id="document"
                name="document"
                placeholder="Ingrese su documento"
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
            <div class="justify-start items-start gap-2">
              <label className="font-semibold">Tipo</label>
              <select
                defaultValue={"persona"}
                onChange={(e) => {
                  console.log(e.target.value);
                  setType(e.target.value);
                }}
                type="text"
                id="type"
                name="type"
                placeholder="Seleccione el tipo de cuenta "
                required
                className={`text-center rounded-md shadow ml-11 ${
                  daltonismo === "normal"
                    ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
                    : daltonismo === "protanopia"
                    ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
                    : daltonismo === "deuteranopia"
                    ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                    : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
                }`}
              >
                <option value="persona">Pesona natural</option>
                <option value="empresa">Persona juridica</option>
              </select>
            </div>
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
              <p className="text-[9px]">
                La contraseña debe contener minimo 8 caracteres.
              </p>
            </div>
            <div class="flex flex-col justify-start items-start gap-2">
              <label className="font-semibold">Confirmar Contraseña</label>
              <input
                onChange={(e) => {
                  setPassword2(e.target.value);
                }}
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
                Registrarse
              </Button>
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
