"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { useAppContext } from "@/context";

import { Blend } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ColorBlindToggle() {
  const [mounted, setMounted] = useState(false);
  const { setDaltonismo } = useAppContext();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-full p-2 scale-90" size="none">
          <Blend></Blend>
          <span className="sr-only">Toggle ColorBlind</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="md:start center">
        <DropdownMenuItem onClick={() => setDaltonismo("normal")}>
          Normal
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setDaltonismo("protanopia")}>
          Protanopia
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setDaltonismo("deuteranopia")}>
          Deuteranopia
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setDaltonismo("tritanopia")}>
          Tritanopia
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
