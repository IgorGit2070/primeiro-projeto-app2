import logo from './logo.svg';
import './App.css';
import Events from './components/Events';
import NewStates from './components/NewStates';
import ListRender from './components/ListRender';
import PropsTest from './components/PropsTest';
import Destructing from './components/Destructing';

function App() {
  const nome = "José"

  return (
    <div className="App">
      {/* Trabalhando com events */}
      <Events/>
      {/* Uso do useState */}
      <NewStates/>
      {/* Mostrando listas na tela */}
      <ListRender/>
      {/* Trabalhando com props */}
      <PropsTest name={nome} />
      {/* Destructing */}
      <Destructing time="São Paulo" estado="SP" posicao={1} campeao={true} />
      {/* Reaproveitando components */}
      <Destructing time="Gama" estado="DF" posicao={2} campeao={false} />
      <Destructing time="Vasco" estado="RJ" posicao={3} campeao={false} />
    </div>
  );
}

export default App;
