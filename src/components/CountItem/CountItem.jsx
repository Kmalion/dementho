import React from 'react'
import { useState } from 'react'
import {BsFillCartFill} from "react-icons/bs"

export const CountItem = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState  (initial);
    const decrease = () =>{
        setCount(count - 1);
    }
    const increase = () =>{
        setCount(count + 1);
    }

  return (
    <div>
    <div class="btn-group mt-1" role="group" aria-label="Basic example">
    <button disabled={count <= 1} onClick={decrease}type="button" class="btn btn-secondary btn-sm ">
      -
    </button>
    <button type="button" class="btn btn-secondary btn-sm ">
      {count}
    </button>
    <button disabled={count >= stock}onClick={increase}type="button" class="btn btn-secondary btn-sm ">
      +
    </button>
  </div>
<div>
<button disabled={stock <= 0} onClick={() => onAdd(count)} type="button" class="btn btn-outline-info btn-sm mt-3"><BsFillCartFill /> Agregar al carrito</button>
</div>
</div>
  )
}
