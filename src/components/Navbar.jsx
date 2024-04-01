"use client";
import { ModeToggle } from "@/components/ToggleDarkMode";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ColorBlindToggle } from "@/components/ColorBlindToggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { UserRound } from "lucide-react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="relative flex flex-row px-6 sm:px-12 md:px-24 py-2 max-w-full w-full shadow-sm shadow-black/50 items-center justify-between md:gap-4 gap-2">
      <ModeToggle />
      <ColorBlindToggle />
      <div className="flex flex-row flex-grow justify-end md:gap-20 sm:gap-10 gap-0 ">
        <Link
          href="/contratos"
          className={`${buttonVariants({
            variant: "link",
          })} px-2 text-[1.125rem]`}
        >
          Contratos
        </Link>
        <Link
          href="/cuentas"
          className={`${buttonVariants({
            variant: "link",
          })} px-2 text-[1.125rem]`}
        >
          Cuentas de Cobro
        </Link>
        <Link href="/account">
          <Avatar>
            <Button variant="default" className="scale-110">
              <UserRound />
            </Button>
            <AvatarFallback>
              <AvatarImage src="/avatar.jpg" alt="Avatar" />
            </AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
