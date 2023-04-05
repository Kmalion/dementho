import React, { useState, useEffect } from 'react'
import { ItemListComponent } from '../ItemList/ItemListComponent';
import { pedirProductos } from './pedirProductos';

export const ItemListContainerComponent = () =>{

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    pedirProductos()
      .then((res) => {
        setProductos(res);
      })
  }, [])
  

  return (
    <div className='container'>
      <h5 className='title text-center mt-2 mb-3'>Listado de categorias general</h5>
        <ItemListComponent productos={productos} />
    </div>
  )
};

