"use client";
import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  let [daltonismo, setDaltonismo] = useState("normal");
  const [items, setItems] = useState([]); //Items de la plantilla actual
  const [itemsNotAdded, setItemsNotAdded] = useState([]); //Items que no han sido añadidos a la plantilla actual, pero estan en el sidebar
  const [allItems, setAllItems] = useState([{
    id: '1111',
    titulo: "Clausula 1",
    contenido: "lorem ipsum"
  },
  {
    id: '2222',
    titulo: "Clausula 2",
    contenido: "lorem ipsum"
  },
  {
    id: '3333',
    titulo: "Clausula 3",
    contenido: "lorem ipsum"
  }]); //Items de todas las plantillas
  const [plantillas, setPlantillas] = useState([
    {
      nombre: "Plantilla 1",
      items: [
        {
          id: '1111',
          titulo: "Clausula 1",
          contenido: "lorem ipsum"
        },
        {
          id: '2222',
          titulo: "Clausula 2",
          contenido: "lorem ipsum"
        },
        {
          id: '3333',
          titulo: "Clausula 3",
          contenido: "lorem ipsum"
        }
      ]
    },
    {
      nombre: "Plantilla 2",
      items: [
        {
          id: '4444',
          titulo: "Clausula 4",
          contenido: "lorem ipsum"
        },
        {
          id: '5555',
          titulo: "Clausula 5",
          contenido: "lorem ipsum"
        },
        {
          id: '6666',
          titulo: "Clausula 6",
          contenido: "lorem ipsum"
        }
      ]
    },
  ]); //Plantillas

  const axios = require('axios').default;
  const instance = axios.create({
    baseURL: 'http://localhost:3001/api/v1',
  });

  const addItem = (index, item) => {
    setItems((prevItems) => {
      const newItems = [...items];
      newItems.splice(index, 0, item);
      return newItems;
    })
  }

  const removeItem = (itemId) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== itemId)
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
