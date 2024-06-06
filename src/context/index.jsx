"use client";
import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const axios = require('axios').default;
  const instance = axios.create({
    baseURL: 'http://localhost:3001/api/v1',
  });
  let [daltonismo, setDaltonismo] = useState("normal");
  const [items, setItems] = useState([]); //Items de la plantilla actual
  const [itemsNotAdded, setItemsNotAdded] = useState([]); //Items que no han sido añadidos a la plantilla actual, pero estan en el sidebar
  const [allItems, setAllItems] = useState([
    //   {
    //   id: '1111',
    //   titulo: "Clausula 1",
    //   contenido: "lorem ipsum"
    // },
    // {
    //   id: '2222',
    //   titulo: "Clausula 2",
    //   contenido: "lorem ipsum"
    // },
    // {
    //   id: '3333',
    //   titulo: "Clausula 3",
    //   contenido: "lorem ipsum"
    // }
  ]); //Items de todas las plantillas

  const [plantillas, setPlantillas] = useState([
    {
      nombre: "Plantilla1",
      cabecera: "Contrato prestacion de servicios"
    },
    {
      nombre: "Plantilla2",
      cabecera: "Contrato riesgos"
    },
    {
      nombre: "Plantilla3",
      cabecera: "Contrato oficina de sistemas"
    },
    {
      nombre: "Plantilla4",
      cabecera: "Contrato marketing"
    },
    {
      nombre: "Plantilla5",
      cabecera: "Contrato pasantias"
    },
    {
      nombre: "Plantilla6",
      cabecera: "Contrato desarrollador"
    },
  ]); //Plantillas

  const [cuentas, setCuentas] = useState([
    {
      nombre: "Cuenta 1",
      cabecera: "Cuenta prestacion de servicios"
    },
    {
      nombre: "Cuenta 2",
      cabecera: "Cuenta riesgos"
    },
    {
      nombre: "Cuenta 3",
      cabecera: "Cuenta oficina de sistemas"
    },
    {
      nombre: "Cuenta 4",
      cabecera: "Cuenta marketing"
    },
    {
      nombre: "Cuenta 5",
      cabecera: "Cuenta pasantias"
    },
    {
      nombre: "Cuenta 6",
      cabecera: "Cuenta desarrollador"
    },
  ]); //Plantillas

  const [isLogged, setIsLogged] = useState(false);

  const addPlantilla = (plantilla) => {
    setPlantillas((prevPlantillas) => {
      return [...prevPlantillas, plantilla]
    })
  }

  const removePlantilla = (plantilla) => {
    setPlantillas((prevPlantillas) => {
      return prevPlantillas.filter((p) => p.nombre !== plantilla.nombre)
    })
  }

  const addItem = (index, item) => {
    setItems(() => {
      const newItems = [...items];
      newItems.splice(index, 0, item);
      return newItems;
    })
  }

  const addItemAtStart = (item) => {
    setItems(() => {
      const newItems = [...items];
      newItems.unshift(item);
      return newItems;
    })
  }

  const removeItem = (itemId) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.itemId !== itemId)
    })
  }

  const addItemNotAdded = (item) => {
    if (itemsNotAdded.find((i) => i.id === item.id)) { alert("Item ya añadido"); return; }

    setItemsNotAdded((prevItems) => {
      return [...prevItems, item]
    })
  }

  const removeItemNotAdded = (itemId) => {
    setItemsNotAdded((prevItems) => {
      return prevItems.filter((item) => item.id !== itemId)
    })
  }

  const addItemToAllItems = (item) => {
    setAllItems((prevItems) => {
      return [...prevItems, item]
    })
  }

  const removeItemFromAllItems = (itemId) => {
    setAllItems((prevItems) => {
      return prevItems.filter((item) => item.id !== itemId)
    })
  }


  return (
    <AppContext.Provider
      value={{
        daltonismo,
        setDaltonismo,
        items,
        setItems,
        addItem,
        addItemAtStart,
        removeItem,
        plantillas,
        setPlantillas,
        allItems,
        setAllItems,
        itemsNotAdded,
        setItemsNotAdded,
        addItemNotAdded,
        removeItemNotAdded,
        addItemToAllItems,
        removeItemFromAllItems,
        instance,
        addPlantilla,
        removePlantilla,
        cuentas,
        setCuentas,
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
