import React from 'react'
import { ItemComponent } from '../ItemComponent/ItemComponent';


export const ItemListComponent = ({productos}) => {
  return (
    <div className="row">
    { productos.length > 0 && 
      productos.map((producto)=>{
          return(
            
            <ItemComponent key={producto.id} producto={producto} />
          )
      })  
    }
    </div>
  )
};



