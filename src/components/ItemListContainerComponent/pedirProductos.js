import data from '../productos.json'

export const pedirProductos = () =>{
    return new Promise((resolve, reject)=>{
      resolve(data)
    })
  }