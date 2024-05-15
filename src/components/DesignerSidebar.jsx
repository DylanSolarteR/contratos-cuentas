import { useAppContext } from "@/context";
import PlantillaItem from "./PlantillaItem";
import AddClausulaDialog from "./AddClausulaDialog";


function DesignerSidebar() { //La sidebar
    const { daltonismo, itemsNotAdded } = useAppContext();
    return (
        <aside className={`w-[600px] max-w-[600px] flex flex-col flex-grow gap-4 border-l-2 ${daltonismo === " normal"
            ? "border-light-acento-2/60 dark:border-dark-acento-2/60"
            : daltonismo === "protanopia"
                ? "border-protanopia-light-acento-2/60 dark:border-protanopia-dark-acento-2/50"
                : daltonismo === "deuteranopia"
                    ? "border-deuteranopia-light-acento-2/60 dark:border-deuteranopia-dark-acento-2/60"
                    : "border-tritanopia-light-acento-2/60 dark:border-tritanopia-dark-acento-2/50"
            } p-4 bg-light-fondo dark:bg-dark-fondo overflow-y-auto h-full`}>
            Clausulas
            {/* Aca se deberian listar las clausulas */}
            <AddClausulaDialog />
            {itemsNotAdded.length === 0 && <p className="flex justify-center">No hay clausulas añadidas</p>}
            {itemsNotAdded.map((item) => (
                <PlantillaItem key={item.id} id={item.id} titulo={item.titulo} contenido={item.contenido} />
            ))}
            {/* <PlantillaItem id={'1111'} titulo={"Clausula 1"} contenido={"lorem ipsum"} />
            <PlantillaItem id={'2222'} titulo={"Clausula 2"} contenido={"lorem ipsum"} />
            <PlantillaItem id={'3333'} titulo={"Clausula 3"} contenido={"lorem ipsum"} /> */}
        </aside>
    )
}

export default DesignerSidebar