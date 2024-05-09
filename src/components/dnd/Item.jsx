"use client";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Item({ item }) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: item.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            style={style}
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            className="bg-white p-4 rounded-md shadow-md"
        >
            <h1 className="font-bold">{item.name}</h1>
            <h2 className="border-b border-zinc-700">{item.desc}</h2>
            <p className="">{item.text}</p>
        </div>
    );
}

export default Item;