"use client";
import { ModeToggle } from "@/components/ToggleDarkMode";
import { Avatar } from "@/components/ui/avatar";
import { ColorBlindToggle } from "@/components/ColorBlindToggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { UserRound } from "lucide-react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { useAppContext } from "../context/index";

function Navbar() {
  const { daltonismo, isLogged, setIsLogged } = useAppContext();
  let [navListToggle, setNavListToggle] = useState(false);
  let token = '';

  useEffect(() => {
    token = localStorage.getItem('token');
    if (token) {
      setIsLogged(true)
    }
  }, [])


  return (
    <nav
      className={`sticky top-0 z-[9999] flex md:flex-row md:h-fit md:px-36 max-w-full w-full px-6 shadow-sm bg-light-fondo dark:bg-dark-fondo ${daltonismo === "normal"
        ? "shadow-light-acento-2 dark:shadow-dark-acento-2"
        : daltonismo === "protanopia"
          ? "shadow-protanopia-light-acento-2 dark:shadow-protanopia-dark-acento-2"
          : daltonismo === "deuteranopia"
            ? "shadow-deuteranopia-light-acento-2 dark:shadow-deuteranopia-dark-acento-2"
            : "shadow-tritanopia-light-acento-2 dark:shadow-tritanopia-dark-acento-2"
        } items-center md:justify-between md:gap-4 gap-4 py-1 justify-between flex-col`}
    >
      <div className="flex flex-row justify-center items-center order-first gap-2">
        <Button
          variant="ghost"
          className="px-2 md:hidden"
          onClick={() =>
            navListToggle ? setNavListToggle(false) : setNavListToggle(true)
          }
        >
          <Menu></Menu>
        </Button>
        <ModeToggle />
        <ColorBlindToggle />
      </div>

      <ul
        className={`md:flex md:flex-row md:flex-grow md:justify-end  md:relative md:order-2 ${navListToggle
          ? "text-center flex-col gap-0 items-center order-last"
          : "hidden"
          }`}
      >
        <li className={`${!isLogged && "hidden"}`}>
          <Link
            href="/dashboard"
            className={`${buttonVariants({
              variant: "ghost",
            })} lg:px-6 md:px-2 text-[1.125rem] font-semibold`}
          >
            Dashboard
          </Link>
        </li>
        <li className={`${!isLogged && "hidden"}`}>
          <Link
            href="/dashboard/contratos"
            className={`${buttonVariants({
              variant: "ghost",
            })} lg:px-6 md:px-2 text-[1.125rem] font-semibold`}
          >
            Contratos
          </Link>
        </li>
        <li className={`${!isLogged && "hidden"}`}>
          <Link
            href="/dashboard/clientes"
            className={`${buttonVariants({
              variant: "ghost",
            })} lg:px-6 md:px-2 text-[1.125rem] font-semibold`}
          >
            Clientes
          </Link>
        </li>
        <li className={`${isLogged && "hidden"}`}>
          <Link
            href="/login"
            className={`${buttonVariants({
              variant: "ghost",
            })} lg:px-6 md:px-2 text-[1.125rem] font-semibold`}
          >
            Iniciar sesión
          </Link>
        </li>
      </ul>

      <Link
        href="/account"
        className={`order-2 md:order-last flex flex-row justify-center items-center ${!navListToggle && "hidden md:flex"
          }`}
      >
        <Avatar className="border border-light-texto flex justify-center h-7 w-7 scale-105 ">
          <Button
            variant="outline"
            className="scale-110 p-0 w-full h-full max-w-full max-h-full"
          >
            <UserRound />
          </Button>
        </Avatar>
      </Link>
    </nav>
  );
}

export default Navbar;
