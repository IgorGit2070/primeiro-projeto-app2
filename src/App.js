import logo from './logo.svg';
import './App.css';
import Events from './components/Events';
import NewStates from './components/NewStates';
import ListRender from './components/ListRender';
import PropsTest from './components/PropsTest';
import Destructing from './components/Destructing';
import Singers from './components/Singers';
import { useState } from 'react';

function App() {
  const nome = "José"

  const [cantores] = useState([
    {
      id: 1,
      name: "Michael Jasckon",
      gender:"Pop",
      winner: true,
      position: 1
    },
    {
      id: 2,
      name: "Taylor Swift",
      gender:"Country",
      winner: false,
      position: 2
    },
    {
      id: 3,
      name: "Alceu Valença",
      gender:"Forró",
      winner: false,
      position: 3
    },
  ])

  return (
    <div className="App">
      {/*
      {/* Trabalhando com events /}
      <Events/>
      {/* Uso do useState /}
      <NewStates/>
      {/* Mostrando listas na tela /}
      <ListRender/>
      {/* Trabalhando com props /}
      <PropsTest name={nome} />
      {/* Destructing /}
      <Destructing time="São Paulo" estado="SP" posicao={1} campeao={true} />
      {/* Reaproveitando components /}
      <Destructing time="Gama" estado="DF" posicao={2} campeao={false} />
      <Destructing time="Vasco" estado="RJ" posicao={3} campeao={false} />
      */}
      {
        cantores.map(
          (cantor) => (
            <Singers 
            key={cantor.id} 
            name={cantor.name} 
            gender={cantor.gender} 
            winner={cantor.winner} 
            position={cantor.position} 
            />
          )
        )
      }
      <Singers/>
    </div>
  );
}

export default App;
