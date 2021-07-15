import React, {Component} from 'react';
import './App.css';
import {useState} from 'react';


function App() {
  let [resultado, setResultado] = useState(0);
  let [operacion, setOperacion] = useState(null);
  let [value, setValue] = useState(0);
  let [numeroUno, setNumeroUno] =useState(0)
  let [numeroDos, setNumeroDos] =useState(0)

  function operation(){

  }
  function suma(numeroUno,numeroDos){
    return(numeroUno + numeroDos)
  }
  function Clear(nameImput){
    if(nameImput=='numeroUno'){
      setNumeroUno(0)
    }else{
      setNumeroDos(0)
    }
  }

  function handleChange(e, nameImput){
    if(nameImput == 'numeroUno'){
      setNumeroUno(e.target.value)
    }else{
      setNumeroDos(e.target.value)
    }
    console.log(e.target.value)
  }


  return (
    <div className="App">
      <header className="App-header">

      <div>
          <button onClick={()=>Clear('numeroUno')}>Clear</button>
          <input onChange={(e)=>handleChange(e,'numeroUno')} type="number" value={numeroUno}></input>
      </div>

      <div>
          <button onClick={()=>Clear('numeroDos')}>Clear</button>
          <input onChange={(e)=>handleChange(e,'numeroDos')} type="number" value={numeroDos}></input>
      </div>

        <div>{resultado}</div>

        <button onClick={()=>setResultado(0)}>Clear</button>


      </header>

    </div>
  );
}

export default App;
