// rafce
import React from 'react'

const Singers = ({id, name, gender, winner, position}) => {
  return (
    <div>
        <h3>Singers</h3>
        <hr/>
        <h2>O artista é: {name} </h2>
        <h2>Canta o gênero: {gender} </h2>
        <h2>No top da Billboard, está na posição: {position} </h2>
        {winner && <h1>É vencedor em sua categoria</h1>}
    </div>
  )
}

export default Singers