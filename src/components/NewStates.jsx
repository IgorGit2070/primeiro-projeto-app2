//rafce
import React from 'react'
import { useState } from 'react'

const NewStates = () => {
    let valor = 10
    console.log(valor)

    const [number,setNumber] = useState(15)
    console.log(number)
    
  return (
    <div>
        <h3>NewStates</h3>
        <p>Valor: {valor}</p>
        <button onClick={() => (valor = 20)}>Mudar valor</button>

        {/* Variaveis com useState */}
        <p>Valor com useState: {number} </p>
        <button onClick={() => (setNumber(number + 15))}> Aumentar valor </button>
    </div>
  )
}

export default NewStates