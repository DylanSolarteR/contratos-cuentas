"use client";
import { useAppContext } from "@/context";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function CrearCliente() {
    const router = useRouter()
    const { daltonismo, instance } = useAppContext();
    const [name, setName] = useState("");
    const [type, setType] = useState("CC");
    const [document, setDocument] = useState("");
    const [phone, setPhone] = useState("");
    const [adress, setAdress] = useState("");
    const [email, setEmail] = useState("");

    const token = localStorage.getItem('token');

    const onSubmit = () => {
        if (name != "" && type != "" && document != "" && phone != "" && adress != "") {
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
                        .post("/cliente", {
                            nombreCompleto: name,
                            tipoDocumento: type,
                            documento: document,
                            email: email,
                            telefono: phone,
                            direccion: adress,
                        }, {
                            headers: {
                              Authorization: `Bearer ${token}`,
                            },
                          })
                        .then((response) => {
                            if (response.status === 200) {
                                router.push("/dashboard/clientes");
                            }
                        })
                        .catch((err) => {
                            console.log(err)
                            Swal.fire({
                                title: "Error de registro",
                                text: "Datos incorrectos" + err,
                                icon: "error",
                                confirmButtonText: "OK",
                            });
                        });
                }
            });
        } else {
            Swal.fire({
                title: "Error",
                text: "Datos incompletos",
                icon: "error",
            });
        }
    };

    return (
        <div>
            <main
                className={`flex flex-col h-[90vh] items-center justify-center px-4 md:px-36 py-4 bg-light-fondo dark:bg-dark-fondo text-shadow-sm ${daltonismo === "normal"
                        ? "text-light-texto shadow-light-acento-2 dark:text-dark-texto dark:shadow-dark-acento-2"
                        : daltonismo === "protanopia"
                            ? "text-protanopia-light-texto shadow-protanopia-light-acento-2 dark:text-protanopia-dark-texto dark:shadow-protanopia-dark-acento-2"
                            : daltonismo === "deuteranopia"
                                ? "text-deuteranopia-light-texto shadow-deuteranopia-light-acento-2 dark:text-deuteranopia-dark-texto dark:shadow-deuteranopia-dark-acento-2"
                                : "text-tritanopia-light-texto shadow-tritanopia-light-acento-2 dark:text-tritanopia-dark-texto dark:shadow-tritanopia-dark-acento-2"
                    }`}
            >
                <div className="flex flex-col justify-center items-center gap-4">
                    <h2 className="text-2xl font-bold">Registro cliente nuevo</h2>
                    <div
                        class={`w-fit m-auto h-fit rounded-lg flex flex-col justify-center items-center p-4 gap-5  shadow-md bg-neutral-200/30 dark:bg-dark-fondo dark:shadow-lg border ${daltonismo === "normal"
                                ? "border-light-acento-2/10 dark:border-dark-acento-2/10"
                                : daltonismo === "protanopia"
                                    ? "border-protanopia-light-acento-2/10 dark:border-protanopia-dark-acento-2/1"
                                    : daltonismo === "deuteranopia"
                                        ? "border-deuteranopia-light-acento-2/10 dark:border-deuteranopia-dark-acento-2/10"
                                        : "border-tritanopia-light-acento-2/10 dark:border-tritanopia-dark-acento-2/1"
                            }
            ${daltonismo === "normal"
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
                            <label className="font-semibold">Nombre Completo</label>
                            <input
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Ingrese el nombre"
                                required
                                className={`text-center rounded-md shadow ${daltonismo === "normal"
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
                                placeholder="Seleccione el tipo de documento "
                                required
                                className={`text-center rounded-md shadow ml-11 ${daltonismo === "normal"
                                        ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
                                        : daltonismo === "protanopia"
                                            ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
                                            : daltonismo === "deuteranopia"
                                                ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                                                : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
                                    }`}
                            >
                                <option value="CC">CC</option>
                                <option value="NIT">NIT</option>
                                <option value="PASS">Pasaporte</option>
                            </select>
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
                                placeholder="Ingrese el documento"
                                required
                                className={`text-center rounded-md shadow ${daltonismo === "normal"
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
                            <label className="font-semibold">Correo</label>
                            <input
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Ingrese el correo"
                                required
                                className={`text-center rounded-md shadow ${daltonismo === "normal"
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
                            <label className="font-semibold">Teléfono</label>
                            <input
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Ingrese el Teléfono"
                                required
                                className={`text-center rounded-md shadow ${daltonismo === "normal"
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
                            <label className="font-semibold">Dirección</label>
                            <input
                                onChange={(e) => {
                                    setAdress(e.target.value);
                                }}
                                type="text"
                                id="adress"
                                name="adress"
                                placeholder="Ingrese la dirección"
                                required
                                className={`text-center rounded-md shadow ${daltonismo === "normal"
                                        ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
                                        : daltonismo === "protanopia"
                                            ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
                                            : daltonismo === "deuteranopia"
                                                ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                                                : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
                                    }`}
                            />
                        </div>

                        <div className=" flex flex-col justify-center items-center">
                            <Button
                                onClick={onSubmit}
                                variant="default"
                                className={`rounded-lg font-semibold shadow ${daltonismo === "normal"
                                        ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
                                        : daltonismo === "protanopia"
                                            ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
                                            : daltonismo === "deuteranopia"
                                                ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                                                : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
                                    }`}
                            >
                                Registrar cliente
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
