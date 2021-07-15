  export function suma(numeroUno,numeroDos){
    return(numeroUno + numeroDos)
  }
  export function resta(numeroUno,numeroDos){
    return(numeroUno - numeroDos)
  }
  export function multiplicacion(numeroUno,numeroDos){
    return(numeroUno * numeroDos)
  }
  export function division(numeroUno,numeroDos){
    if(numeroUno > 0 && numeroDos > 0){
      return(
        (numeroUno / numeroDos).toFixed(2)
        )
      }else{
        return 0
      }
  }
  export function potencia(numeroUno,numeroDos){
    return (
      (Math.pow(numeroUno, numeroDos)).toFixed(2)
      )
  }
  export function raiz(numero){
    return (Math.sqrt(numero)).toFixed(2)
  }
  export function hypotenusa(numeroUno,numeroDos){
    return(
      (Math.hypot(numeroUno,numeroDos)).toFixed(2)
    )
  }
