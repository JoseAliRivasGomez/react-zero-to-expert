import { ContadorRed } from "./components/ContadorRed";
import { Counter } from "./components/Counter"
import { Formulario } from "./components/Formulario";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from './components/Usuario';


function App() {

  
  return (
    <>
      <h1>React + TypeScript</h1>

      <hr />
      <h2>useState:</h2>
      <Counter />
      <Usuario />

      <hr />
      <h2>useEffect - useRef:</h2>

      <TimerPadre />

      <hr />
      <h2>useReducer</h2>
      <ContadorRed />

      <hr />
      <h2>customHooks</h2>
      <Formulario />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </>
  )
}

export default App
