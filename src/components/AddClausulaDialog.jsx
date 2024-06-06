import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useAppContext } from "@/context"
import { CornerUpRight } from "lucide-react"
import { Trash } from "lucide-react"
import Swal from "sweetalert2";
import { addItems, deleteItem } from "@/actions/Items"
import { useState } from "react"
import Tiptap from "@/components/Tiptap"
import parse from 'html-react-parser';
export function AddClausulaDialog() {

    const { allItems, addItemNotAdded, addItemToAllItems, instance, removeItemFromAllItems, removeItemNotAdded, removeItem } = useAppContext()
    const [open, setOpen] = useState(false)
    const [newOpen, setNewOpen] = useState(false)
    const [newTitle, setNewTitle] = useState('')
    const [newContent, setNewContent] = useState('')

    const handleNewTitle = (e) => {
        setNewTitle(e.target.value)
    }

    const handleNewContent = (e) => {
        //set the new html string
        setNewContent(e)
        console.log(e)
    }


    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}
            className="bg-light-fondo dark:bg-dark-fondo"
        >
            {/* Dialogo para insertar nueva clausula */}
            <DialogTrigger asChild>
                <Button className="p-2 font-medium border border-light-texto dark:border-dark-texto">Agregar Clausula</Button>
            </DialogTrigger>
            <DialogContent className="max-w-[1000px] min-w-[400px] w-fit bg-light-fondo dark:bg-dark-fondo border-light-texto dark:border-dark-texto overflow-y-auto max-h-[80vh] z-50">
                {/* Dialogo para crear nueva clausula */}
                <Dialog open={newOpen} onOpenChange={setNewOpen} className="bg-light-fondo dark:bg-dark-fondo">
                    <DialogTrigger asChild className="flex">
                        <Button className="w-[80vh] justify-self-center p-2 font-medium border border-light-texto dark:border-dark-texto text-center">Nueva Clausula</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[600px] w-full bg-light-fondo dark:bg-dark-fondo border-light-texto dark:border-dark-texto overflow-y-auto max-h-[80vh]">
                        <DialogTitle className="text-light-texto dark:text-dark-texto font-semibold underline">Nueva Clausula</DialogTitle>
                        <DialogDescription className="text-light-texto dark:text-dark-texto">Ingrese el titulo y contenido de la nueva clausula</DialogDescription>
                        <div className="flex flex-col gap-2">
                            <input type="text" value={newTitle} onChange={handleNewTitle} placeholder="Titulo" className="p-2 border border-light-texto dark:border-dark-texto bg-transparent rounded-md" />


                            {/* <textarea id='editor' name="contenido-nueva-clausula" placeholder="Contenido" className="p-2 border border-light-texto dark:border-dark-texto" /> */}

                            <Tiptap description={newContent} onChange={handleNewContent} />





                            <DialogFooter>
                                <Button
                                    variant="link"
                                    className="p-2  font-medium border border-light-texto dark:border-dark-texto"
                                    onClick={() => {
                                        setNewOpen(false)
                                    }}
                                >Cancelar</Button>
                                <Button
                                    className="p-2  font-medium border border-light-texto dark:border-dark-texto"
                                    onClick={async () => {
                                        //Crear nueva clausula
                                        console.log(newTitle)
                                        console.log(newContent)
                                        if (newTitle.length > 0 && newContent.length > 0) {
                                            const token = localStorage.getItem('token')
                                            const result = await addItems(instance, { titulo: newTitle, tipo: 'clausula', contenido: newContent }, token)
                                            addItemToAllItems({ id: result._id, itemId: result._id, titulo: result.titulo, contenido: result.contenido, tipo: 'clausula' })
                                            setNewOpen(false)
                                        } else {
                                            alert("Debe completar todos los campos")
                                        }
                                    }
                                    }
                                >Crear</Button>
                            </DialogFooter>
                        </div>
                    </DialogContent>
                </Dialog >
                {/* Lista de items */}
                {allItems.length !== 0 && (
                    <>
                        {allItems.map((item) => (
                            <div key={item.id} className="flex flex-row gap-0">
                                <div className="w-full border border-r-0 border-light-texto dark:border-dark-texto rounded p-2">

                                    <DialogTitle className="text-light-texto dark:text-dark-texto font-semibold underline">{item.titulo}</DialogTitle>
                                    <DialogDescription className="py-2 pr-2 text-justify text-sm w-full text-wrap overflow-y-auto max-h-40 text-light-texto dark:text-dark-texto">{parse(item.contenido)}</DialogDescription>
                                </div>
                                <div className="flex flex-col h-full border border-light-texto dark:border-dark-texto rounded">
                                    <Button
                                        variant="ghost"
                                        className="h-full"
                                        onClick={() => {
                                            addItemNotAdded(item)
                                        }
                                        }
                                    ><CornerUpRight /></Button>
                                    <Button
                                        variant="ghost"
                                        className="h-full"
                                        onClick={() => {
                                            // addItemNotAdded(item)
                                            setOpen(false);
                                            Swal.fire({
                                                title: "¿Confirmas la eliminación?",
                                                icon: "question",
                                                showCancelButton: true,
                                                cancelButtonText: "Cancelar",
                                                confirmButtonText: "Confirmar",
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    deleteItem(instance, item.id, localStorage.getItem('token'))
                                                        .then((res) => {
                                                            removeItemFromAllItems(item.id)
                                                            removeItemNotAdded(item.id)
                                                            removeItem(item.id)
                                                            Swal.fire({
                                                                title: "Eliminado",
                                                                text: "El item ha sido eliminado",
                                                                icon: "success",
                                                            });
                                                        })

                                                }
                                            });
                                            //</div></div>
                                        }
                                        }
                                    ><Trash /></Button>
                                </div>
                            </div>
                        ))}
                    </>
                )}
                {allItems.length === 0 && (<>
                    <p>No hay clausulas disponibles</p>
                </>
                )}
            </DialogContent>
        </Dialog >
    )
}



export default AddClausulaDialog