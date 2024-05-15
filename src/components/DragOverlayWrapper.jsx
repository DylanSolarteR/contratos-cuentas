import { DragOverlay, useDndMonitor } from "@dnd-kit/core"
import { useState } from "react"
import { PlantillaItemDragOverlay } from "./PlantillaItem"
import { useAppContext } from "@/context"

function DragOverlayWrapper() {
    const { items, setItems } = useAppContext()
    const [draggedItem, setDraggedItem] = useState(null)
    useDndMonitor({
        onDragStart(event) {
            setDraggedItem(event.active)
        },
        onDragEnd(event) {
            setDraggedItem(null)
        },
        onDragCancel(event) {
            setDraggedItem(null)
        }
    })

    if (!draggedItem) return null;

    let node = <div>No drag overlay</div>
    const isSidebarBtnItem = draggedItem?.data?.current?.isDesignerBtnItem;

    if (isSidebarBtnItem) {
        node = <PlantillaItemDragOverlay id={draggedItem?.id} titulo={draggedItem?.data?.current?.titulo} contenido={draggedItem?.data?.current?.contenido} />;
    }

    const isDesignerItem = draggedItem?.data?.current?.isDesignerItem;

    if (isDesignerItem) {
        const itemId = draggedItem?.data?.current?.itemId;
        const item = items.find((item) => item.id === itemId);

        if (!item) node = <div>No item found</div>
        else {

            node = (
                <div className="flex rounded-md h-fit w-full py-2 px-4 opacity-80 border border-light-texto dark:border-dark-texto pointer-events-none">
                    <PlantillaItemDragOverlay id={item.id} titulo={item.titulo} contenido={item.contenido} />
                </div>);

        }

    }

    return (
        <DragOverlay>
            {node}
        </DragOverlay>
    )
}



export default DragOverlayWrapper