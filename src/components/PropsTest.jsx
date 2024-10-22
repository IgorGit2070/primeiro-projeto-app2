// rafce
import React from 'react'

const PropsTest = (props) => {
    console.log(props)
  return (
    <div>
        <h3>PropsTest</h3>
        <p>Seu nome é: {props.name}</p>
    </div>
  )
}

export default PropsTest