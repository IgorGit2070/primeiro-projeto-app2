// rafce
import React from 'react'

const Destructing = ({time, estado, posicao, campeao}) => {
  return (
    <div>
        <h3>Destructing</h3>
        <hr/>
        <p>O nome do time é: {time} </p>
        <p>Seu estado é: {estado} </p>
        <p>A posição no coração do Gregory é: {posicao} </p>
        {campeao && <p>Este time é CAMPEÃO</p> }
    </div>
  )
}

export default Destructing