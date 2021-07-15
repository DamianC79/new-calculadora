import React, {useEffect} from 'react';
import './App.css';
import {useState} from 'react';


function App() {
  let [resultado, setResultado] = useState({
    suma:0,
    resta:0,
    multipicacion:0,
    division:0,
    potencia:0,
    raizUno:0,
    raizDos:0,
    hypotenusa:0
  });
  let [operacion, setOperacion] = useState(null);
  let [value, setValue] = useState(0);
  let [numeroUno, setNumeroUno] =useState(0)
  let [numeroDos, setNumeroDos] =useState(0)

  function operation(){

  }
  function suma(numeroUno,numeroDos){
    return(numeroUno + numeroDos)
  }
  function resta(numeroUno,numeroDos){
    return(numeroUno - numeroDos)
  }
  function multipicacion(numeroUno,numeroDos){
    return(numeroUno * numeroDos)
  }
  function division(numeroUno,numeroDos){
    console.log(numeroUno,numeroDos)
    return(
      (numeroUno / numeroDos).toFixed(2)
      )
  }
  function potencia(numeroUno,numeroDos){
    return (
      (Math.pow(numeroUno, numeroDos)).toFixed(2)
      )
  }
  function raiz(numero){
    return (Math.sqrt(numero)).toFixed(2)
  }
  function hypotenusa(numeroUno,numeroDos){
    return(
      (Math.hypot(numeroUno,numeroDos)).toFixed(2)
    )
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
      setNumeroUno(parseInt(e.target.value))
    }else{
      setNumeroDos(parseInt(e.target.value))
    }
    console.log(e.target.value)
  }

useEffect(() => {
  // if(numeroUno > 0 && numeroDos > 0){
    setResultado({
    suma:suma(numeroUno,numeroDos),
    resta:resta(numeroUno,numeroDos),
    multipicacion:multipicacion(numeroUno,numeroDos),
    division:division(numeroUno,numeroDos),
    potencia:potencia(numeroUno,numeroDos),
    raizUno:raiz(numeroUno),
    raizDos:raiz(numeroDos),
    hypotenusa:hypotenusa(numeroUno,numeroDos)
    })
  // }  
}, [numeroUno,numeroDos])


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

        <div>Suma: {resultado.suma}</div>
        <div>Resta: {resultado.resta}</div>
        <div>Multipicacion: {resultado.multipicacion}</div>
        <div>Division: {resultado.division}</div>
        <div>Potencia: {resultado.potencia}</div>
        <div>Raiz: {resultado.raizUno}</div>
        <div>Raiz :{resultado.raizDos}</div>
        <div>Hipotenusa: {resultado.hypotenusa}</div>
       </header>

    </div>
  );
}

export default App;
