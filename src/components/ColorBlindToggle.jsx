"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { useAppContext } from "@/context";

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
        <Button variant="default" className="scale-110">
          <span className="text-lg">🕶</span>
          <span className="sr-only">Toggle ColorBlind</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
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
