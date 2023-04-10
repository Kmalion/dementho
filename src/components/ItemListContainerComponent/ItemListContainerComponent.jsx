import React, { useState, useEffect } from 'react'
import { ItemListComponent } from '../ItemList/ItemListComponent';
import {collection, getFirestore, getDocs} from "firebase/firestore"

export const ItemListContainerComponent = () =>{

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "productos");
    getDocs(itemsCollection)
    .then (productos => {
      if(productos.length === 0){
        console.log("No hay productos")
      }
      setProductos(productos.docs.map(doc => ({id: doc.id, ...doc.data()})))
    }
      )

  }, [])
  

  return (
    <div className='container'>
      <h5 className='title text-center mt-2 mb-3'>Listado de categorias general</h5>
        <ItemListComponent productos={productos} />
    </div>
  )
};

