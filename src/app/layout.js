import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../lib/theme-utils";
import { AppWrapper } from "@/context";

import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contratos y Cuentas de Cobro",
  description: "Sass para contratos y cuentas de cobro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body
          className={`${inter.className} bg-light-fondo dark:bg-dark-fondo`}
        >
          <AppWrapper>
            <Navbar />
            {children}
          </AppWrapper>
        </body>
      </ThemeProvider>
    </html>
  );
}
