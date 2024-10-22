// rafce
import React from "react";


const Events = () => {
    const teste = (e) => {
        //console.log(e)
        console.log("Funcionou de novo")
    }
    
  return <div>
            <h3>Events</h3>
            <button onClick={() => console.log("Funcionou")}>Clica aqui</button>
            <br/>
            <button onClick={teste}>Clica aqui de novo</button>
        </div>;
};

export default Events;
