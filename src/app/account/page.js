"use client";
import { useAppContext } from "@/context";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import { changePassword, getProfile, updateProfile } from "@/actions/user";
import Swal from "sweetalert2";
import { CloudLightning } from "lucide-react";

function Page() {
  const { toast } = useToast();
  const { daltonismo, setIsLogged, instance } = useAppContext();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasenaVieja, setContrasenaVieja] = useState("");
  const [contrasenaNueva, setContrasenaNueva] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    } else {
      setMounted(true);
      getProfile(instance, localStorage.getItem("token")).then((res) => {
        setNombre(res.nombre);
        setCorreo(res.email);
      });
    }
  }, []);

  const onChangeNombre = (e) => {
    setNombre(e.target.value);
  };

  const onChangeCorreo = (e) => {
    setCorreo(e.target.value);
  };

  const onChangeContrasenaVieja = (e) => {
    setContrasenaVieja(e.target.value);
  };

  const onChangeContrasenaNueva = (e) => {
    setContrasenaNueva(e.target.value);
  };

  const handleUpdateProfile = async () => {
    const data = {
      nombre: nombre,
      email: correo,
    };

    updateProfile(instance, localStorage.getItem("token"), data).then((res) => {
      if (!res) {
        return;
      }
      Swal.fire({
        title: "Perfil actualizado",
        text: "Perfil actualizado exitosamente.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        window.location.reload();
      });
    });
  };

  const handleUpdatePassword = async () => {
    changePassword(
      instance,
      localStorage.getItem("token"),
      contrasenaVieja,
      contrasenaNueva
    ).then((res) => {
      if (!res) {
        return;
      }
      Swal.fire({
        title: "Contraseña actualizada",
        text: "Contraseña actualizada exitosamente.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        logout();
      });
    });
  };

  const logout = () => {
    localStorage.setItem("token", "");
    setIsLogged(false);
    setTimeout(() => {
      toast({
        className: `bg-neutral-200/30 dark:bg-dark-fondo bg-light-fondo border-2 z-50 ${
          daltonismo === "normal"
            ? "border-light-acento-2/10 dark:border-dark-acento-2/10"
            : daltonismo === "protanopia"
            ? "border-protanopia-light-acento-2/10 dark:border-protanopia-dark-acento-2/1"
            : daltonismo === "deuteranopia"
            ? "border-deuteranopia-light-acento-2/10 dark:border-deuteranopia-dark-acento-2/10"
            : "border-tritanopia-light-acento-2/10 dark:border-tritanopia-dark-acento-2/1"
        } shadow ${
          daltonismo === "normal"
            ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
            : daltonismo === "protanopia"
            ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
            : daltonismo === "deuteranopia"
            ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
            : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
        }`,
        description: "Sesión Cerrada",
      });
    }, 500);
    router.push("/");
  };

  return mounted ? (
    <div className="flex flex-col justify-center items-center h-[90vh] max-h-[90vh] px-4  ">
      <Tabs
        defaultValue="account"
        className={`max-w-[400px] w-full rounded-lg bg-light-fondo dark:bg-dark-fondo text-shadow-sm ${
          daltonismo === "normal"
            ? "text-light-texto shadow-light-acento-2 dark:text-dark-texto dark:shadow-dark-acento-2"
            : daltonismo === "protanopia"
            ? "text-protanopia-light-texto shadow-protanopia-light-acento-2 dark:text-protanopia-dark-texto dark:shadow-protanopia-dark-acento-2"
            : daltonismo === "deuteranopia"
            ? "text-deuteranopia-light-texto shadow-deuteranopia-light-acento-2 dark:text-deuteranopia-dark-texto dark:shadow-deuteranopia-dark-acento-2"
            : "text-tritanopia-light-texto shadow-tritanopia-light-acento-2 dark:text-tritanopia-dark-texto dark:shadow-tritanopia-dark-acento-2"
        }`}
      >
        <TabsList
          className={`grid w-full grid-cols-2 text-light-texto/70 dark:text-dark-texto/70  ${
            daltonismo === "normal"
              ? "bg-light-acento-2/40 dark:bg-dark-acento-2/40"
              : daltonismo === "protanopia"
              ? "bg-protanopia-light-acento-2/40 dark:bg-protanopia-dark-acento-2/40"
              : daltonismo === "deuteranopia"
              ? "bg-deuteranopia-light-acento-2/40 dark:bg-deuteranopia-dark-acento-2/40"
              : "bg-tritanopia-light-acento-2/40 dark:bg-tritanopia-dark-acento-2/40"
          } shadow ${
            daltonismo === "normal"
              ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
              : daltonismo === "protanopia"
              ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
              : daltonismo === "deuteranopia"
              ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
              : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
          }`}
        >
          <TabsTrigger
            value="account"
            className={`data-[state=active]:bg-light-fondo data-[state=active]:text-light-texto dark:data-[state=active]:bg-dark-fondo dark:data-[state=active]:text-dark-texto  data-[state=active]:shadow-sm ${
              daltonismo === "normal"
                ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
                : daltonismo === "protanopia"
                ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
                : daltonismo === "deuteranopia"
                ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
            }`}
          >
            Cuenta
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className={`data-[state=active]:bg-light-fondo data-[state=active]:text-light-texto dark:data-[state=active]:bg-dark-fondo dark:data-[state=active]:text-dark-texto  data-[state=active]:shadow-sm ${
              daltonismo === "normal"
                ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
                : daltonismo === "protanopia"
                ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
                : daltonismo === "deuteranopia"
                ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
            }`}
          >
            Contraseña
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card
            className={`bg-neutral-200/30 dark:bg-dark-fondo border ${
              daltonismo === "normal"
                ? "border-light-acento-2/10 dark:border-dark-acento-2/10"
                : daltonismo === "protanopia"
                ? "border-protanopia-light-acento-2/10 dark:border-protanopia-dark-acento-2/1"
                : daltonismo === "deuteranopia"
                ? "border-deuteranopia-light-acento-2/10 dark:border-deuteranopia-dark-acento-2/10"
                : "border-tritanopia-light-acento-2/10 dark:border-tritanopia-dark-acento-2/1"
            } shadow-md dark:shadow-lg ${
              daltonismo === "normal"
                ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
                : daltonismo === "protanopia"
                ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
                : daltonismo === "deuteranopia"
                ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-shadow">Perfil</CardTitle>
              <CardDescription className="text-shadow-sm">
                Realiza cambios a tu cuenta aqui. Asegurate de guardar los
                cambios.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  defaultValue=""
                  value={nombre}
                  onChange={onChangeNombre}
                  placeholder="Nombre de usuario"
                  className={` rounded-md shadow bg-transparent placeholder:text-light-texto/60 placeholder:dark:text-dark-texto/60 ${
                    daltonismo === "normal"
                      ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
                      : daltonismo === "protanopia"
                      ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
                      : daltonismo === "deuteranopia"
                      ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                      : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
                  } focus-visible:ring-0 ${
                    daltonismo === "normal"
                      ? "ring-offset-light-acento-1/80 dark:ring-offset-dark-acento-1/80"
                      : daltonismo === "protanopia"
                      ? "ring-offset-protanopia-light-acento-1/80 dark:ring-offset-protanopia-dark-acento-1/80"
                      : daltonismo === "deuteranopia"
                      ? "ring-offset-deuteranopia-light-acento-1/80 dark:ring-offset-deuteranopia-dark-acento-1/80"
                      : "ring-offset-tritanopia-light-acento-1/80 dark:ring-offset-tritanopia-dark-acento-1/80"
                  } `}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Correo</Label>
                <Input
                  id="username"
                  defaultValue=""
                  value={correo}
                  onChange={onChangeCorreo}
                  placeholder="ejemplo@dominio.com"
                  className={` rounded-md shadow bg-transparent placeholder:text-light-texto/60 placeholder:dark:text-dark-texto/60 ${
                    daltonismo === "normal"
                      ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
                      : daltonismo === "protanopia"
                      ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
                      : daltonismo === "deuteranopia"
                      ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                      : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
                  } focus-visible:ring-0 ${
                    daltonismo === "normal"
                      ? "ring-offset-light-acento-1/80 dark:ring-offset-dark-acento-1/80"
                      : daltonismo === "protanopia"
                      ? "ring-offset-protanopia-light-acento-1/80 dark:ring-offset-protanopia-dark-acento-1/80"
                      : daltonismo === "deuteranopia"
                      ? "ring-offset-deuteranopia-light-acento-1/80 dark:ring-offset-deuteranopia-dark-acento-1/80"
                      : "ring-offset-tritanopia-light-acento-1/80 dark:ring-offset-tritanopia-dark-acento-1/80"
                  } `}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center gap-4">
              <Button
                variant="default"
                onClick={handleUpdateProfile}
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
                Guardar cambios
              </Button>
              <Button
                variant="destructive"
                onClick={() => {
                  logout();
                }}
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
                Cerrar Sesión
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card
            className={`bg-neutral-200/30 dark:bg-dark-fondo border ${
              daltonismo === "normal"
                ? "border-light-acento-2/10 dark:border-dark-acento-2/10"
                : daltonismo === "protanopia"
                ? "border-protanopia-light-acento-2/10 dark:border-protanopia-dark-acento-2/1"
                : daltonismo === "deuteranopia"
                ? "border-deuteranopia-light-acento-2/10 dark:border-deuteranopia-dark-acento-2/10"
                : "border-tritanopia-light-acento-2/10 dark:border-tritanopia-dark-acento-2/1"
            } shadow-md dark:shadow-lg ${
              daltonismo === "normal"
                ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
                : daltonismo === "protanopia"
                ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
                : daltonismo === "deuteranopia"
                ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-shadow">Contraseña</CardTitle>
              <CardDescription className="text-shadow-sm">
                Cambia tu contraseña aqui. Despues de guardar seras desconectado
                de tu cuenta.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Contraseña actual</Label>
                <Input
                  id="current"
                  type="password"
                  value={contrasenaVieja}
                  onChange={onChangeContrasenaVieja}
                  className={` rounded-md shadow bg-transparent placeholder:text-light-texto/60 placeholder:dark:text-dark-texto/60 ${
                    daltonismo === "normal"
                      ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
                      : daltonismo === "protanopia"
                      ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
                      : daltonismo === "deuteranopia"
                      ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                      : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
                  } focus-visible:ring-0 ${
                    daltonismo === "normal"
                      ? "ring-offset-light-acento-1/80 dark:ring-offset-dark-acento-1/80"
                      : daltonismo === "protanopia"
                      ? "ring-offset-protanopia-light-acento-1/80 dark:ring-offset-protanopia-dark-acento-1/80"
                      : daltonismo === "deuteranopia"
                      ? "ring-offset-deuteranopia-light-acento-1/80 dark:ring-offset-deuteranopia-dark-acento-1/80"
                      : "ring-offset-tritanopia-light-acento-1/80 dark:ring-offset-tritanopia-dark-acento-1/80"
                  } `}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Contraseña nueva</Label>
                <Input
                  id="new"
                  type="password"
                  value={contrasenaNueva}
                  onChange={onChangeContrasenaNueva}
                  className={` rounded-md shadow bg-transparent placeholder:text-light-texto/60 placeholder:dark:text-dark-texto/60 ${
                    daltonismo === "normal"
                      ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
                      : daltonismo === "protanopia"
                      ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
                      : daltonismo === "deuteranopia"
                      ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                      : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
                  } focus-visible:ring-0 ${
                    daltonismo === "normal"
                      ? "ring-offset-light-acento-1/80 dark:ring-offset-dark-acento-1/80"
                      : daltonismo === "protanopia"
                      ? "ring-offset-protanopia-light-acento-1/80 dark:ring-offset-protanopia-dark-acento-1/80"
                      : daltonismo === "deuteranopia"
                      ? "ring-offset-deuteranopia-light-acento-1/80 dark:ring-offset-deuteranopia-dark-acento-1/80"
                      : "ring-offset-tritanopia-light-acento-1/80 dark:ring-offset-tritanopia-dark-acento-1/80"
                  } `}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href={"/login"}>
                <Button
                  variant="default"
                  onClick={handleUpdatePassword}
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
                  Guardar contraseña
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  ) : (
    <div className="h-screen w-screen">
      <Loading />
    </div>
  );
}

export default Page;
