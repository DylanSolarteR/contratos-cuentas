"use client";
import { useAppContext } from "@/context";
import Link from "next/link";
function DashboardCard({ title, desc, refLink }) {
  const { daltonismo } = useAppContext();
  return (
    <div
      className={`flex flex-col h-full place-items-center rounded-lg text-shadow-sm text-light-texto shadow-light-acento-1 dark:text-dark-texto dark:shadow-dark-acento-1`}
    >
      <div
        className={`h-full max-w-lg p-6 rounded-lg ${daltonismo === "normal"
          ? "bg-light-acento-2  dark:bg-dark-acento-2"
          : daltonismo === "protanopia"
            ? "bg-protanopia-light-acento-2 dark:bg-protanopia-dark-acento-2"
            : daltonismo === "deuteranopia"
              ? "bg-deuteranopia-light-acento-2 dark:bg-deuteranopia-dark-acento-2"
              : "bg-tritanopia-light-acento-2 dark:bg-tritanopia-dark-acento-2"
          }  shadow-md ${daltonismo === "normal"
            ? "shadow-light-acento-2/80 dark:shadow-dark-acento-2/80"
            : daltonismo === "protanopia"
              ? "shadow-protanopia-light-acento-2/80 dark:shadow-protanopia-dark-acento-2/80"
              : daltonismo === "deuteranopia"
                ? "shadow-deuteranopia-light-acento-2/80 dark:shadow-deuteranopia-dark-acento-2/80"
                : "shadow-tritanopia-light-acento-2/80 dark:shadow-tritanopia-dark-acento-2/80"
          }`}
      >
        <Link href={refLink}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-ligth-texto dark:text-dark-texto">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-ligth-texto dark:text-dark-texto text-shadow">
          {desc}
        </p>
        <Link
          href={refLink}
          className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-light-texto dark:text-dark-texto rounded-lg focus:outline-none ${daltonismo === "normal"
            ? "bg-light-acento-2  dark:bg-dark-acento-2"
            : daltonismo === "protanopia"
              ? "bg-protanopia-light-acento-2 dark:bg-protanopia-dark-acento-2"
              : daltonismo === "deuteranopia"
                ? "bg-deuteranopia-light-acento-2 dark:bg-deuteranopia-dark-acento-2"
                : "bg-tritanopia-light-acento-2 dark:bg-tritanopia-dark-acento-2"
            } 
              ${daltonismo === "normal"
              ? "hover:bg-light-acento-1  dark:hover:bg-dark-acento-1"
              : daltonismo === "protanopia"
                ? "hover:bg-protanopia-light-acento-1 hover:dark:bg-protanopia-dark-acento-1"
                : daltonismo === "deuteranopia"
                  ? "hover:bg-deuteranopia-light-acento-1 hover:dark:bg-deuteranopia-dark-acento-1"
                  : "hover:bg-tritanopia-light-acento-1 hover:dark:bg-tritanopia-dark-acento-1"
            } shadow-md ${daltonismo === "normal"
              ? "shadow-light-acento-1 dark:shadow-dark-acento-1"
              : daltonismo === "protanopia"
                ? "shadow-protanopia-light-acento-1 dark:shadow-protanopia-dark-acento-1"
                : daltonismo === "deuteranopia"
                  ? "shadow-deuteranopia-light-acento-1 dark:shadow-deuteranopia-dark-acento-1"
                  : "shadow-tritanopia-light-acento-1 dark:shadow-tritanopia-dark-acento-1"
            } hover:scale-95
              `}
        >
          Ver
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default DashboardCard;
