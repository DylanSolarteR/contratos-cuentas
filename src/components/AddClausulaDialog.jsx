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
import { idGenerator } from "@/lib/idGenerator"

import { addItem } from "@/actions/Items"

export function AddClausulaDialog() {
    const { allItems, addItemNotAdded, addItemToAllItems, instance } = useAppContext()

    return (
        <Dialog className="bg-light-fondo dark:bg-dark-fondo">
            {/* Dialogo para insertar nueva clausula */}
            <DialogTrigger asChild>
                <Button className="p-2  font-medium border border-light-texto dark:border-dark-texto">Agregar Clausula</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-light-fondo dark:bg-dark-fondo overflow-y-auto max-h-[80vh]">
                {allItems.length !== 0 && (
                    <>
                        {allItems.map((item) => (
                            <div key={item.id} className="flex flex-row gap-0">
                                <div className="w-full">

                                    <DialogTitle className="text-light-texto dark:text-dark-texto font-semibold underline">{item.titulo}</DialogTitle>
                                    <DialogDescription className="text-ellipsis text-light-texto dark:text-dark-texto">{item.contenido}</DialogDescription>
                                </div>
                                <Button
                                    variant="link"
                                    className=""
                                    onClick={() => {
                                        addItemNotAdded(item)
                                    }
                                    }
                                >Seleccionar</Button>
                            </div>
                        ))}
                    </>
                )}
                {allItems.length === 0 && (<>
                    <p>No hay clausulas disponibles</p>
                    <Button className="p-2  font-medium border border-light-texto dark:border-dark-texto">Crear nueva clausula</Button>
                </>
                )}
                {/* Dialogo para crear nueva clausula */}
                <Dialog className="bg-light-fondo dark:bg-dark-fondo">
                    <DialogTrigger asChild>
                        <Button className="p-2  font-medium border border-light-texto dark:border-dark-texto">Nueva Clausula</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-light-fondo dark:bg-dark-fondo overflow-y-auto max-h-[80vh]">
                        <DialogTitle className="text-light-texto dark:text-dark-texto font-semibold underline">Nueva Clausula</DialogTitle>
                        <DialogDescription className="text-light-texto dark:text-dark-texto">Ingrese el titulo y contenido de la nueva clausula</DialogDescription>
                        <div className="flex flex-col gap-2">
                            <input type="text" name="titulo-nueva-clausula" placeholder="Titulo" className="p-2 border border-light-texto dark:border-dark-texto" />
                            <textarea name="contenido-nueva-clausula" placeholder="Contenido" className="p-2 border border-light-texto dark:border-dark-texto" />
                            <DialogFooter>
                                <Button
                                    variant="link"
                                    className="p-2  font-medium border border-light-texto dark:border-dark-texto"
                                    onClick={() => {
                                    }}
                                >Cancelar</Button>
                                <Button
                                    className="p-2  font-medium border border-light-texto dark:border-dark-texto"
                                    onClick={async () => {
                                        //Crear nueva clausula
                                        const titulo = document.querySelector('input[name="titulo-nueva-clausula"]').value
                                        const contenido = document.querySelector('textarea[name="contenido-nueva-clausula"]').value
                                        if (titulo && contenido) {
                                            const token = localStorage.getItem('token')
                                            const result = await addItem(instance, { titulo, tipo: 'clausula', contenido }, token)
                                            // console.log(result)
                                            // const id = idGenerator() //Cambiar esto cuando este el backend
                                            addItemToAllItems({ id: result._id, itemId: result._id, titulo: result.titulo, contenido: result.contenido, tipo: 'clausula' })
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
            </DialogContent>
        </Dialog >
    )
}



export default AddClausulaDialog