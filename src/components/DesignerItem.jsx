import { useAppContext } from "@/context";
function DesignerItem({ id, titulo, contenido }) { //Los items en el designer, o sea, el cuadro grande
    const { daltonismo } = useAppContext();
    return (
        <div className={`flex flex-col w-full p-4 gap-2 text-light-texto rounded dark:text-dark-texto border ${daltonismo === " normal"
            ? "border-light-acento-2/60 dark:border-dark-acento-2/60"
            : daltonismo === "protanopia"
                ? "border-protanopia-light-acento-2/60 dark:border-protanopia-dark-acento-2/50"
                : daltonismo === "deuteranopia"
                    ? "border-deuteranopia-light-acento-2/60 dark:border-deuteranopia-dark-acento-2/60"
                    : "border-tritanopia-light-acento-2/60 dark:border-tritanopia-dark-acento-2/50"
            }`}>
            <span className="text-base text-light-texto dark:text-dark-texto font-bold">{titulo}</span>
            <p className="text-sm text-light-texto dark:text-dark-texto">{contenido}</p>
        </div>
    )
}

export default DesignerItem