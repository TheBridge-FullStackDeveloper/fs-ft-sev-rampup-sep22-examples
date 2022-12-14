import React, { useState, useEffect } from "react";

function Counter({ test }) {
  const [count, setCount] = useState(3);

  //componentDidMount()
  //componentDidUpdate();

  useEffect(() => {
    console.log("Render");

    const getPokemons = async () => {
      const resp = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await resp.json();
      setCount(data);
    };

    getPokemons();
    //componentDidUpdate();
    return () => {
      // Clean up
      // borrar datos del localStorages
      // Limpiar eventos
    };
  }, [count]);

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count + 1)}>-</button>
    </div>
  );
}

export default Counter;

/* AL CONFIGURAR UN EVENTO (onClick) SE LE PASA UNA DECLARACIÓN de función que será invocada cuando se produzca el evento (Cuando el user hace click)
      
      En React es comun encontrarse con FUNCIONES CONTROLADORAS DE EVENTOS QUE DEBEN DECLARARSE EN LA CONFIGURACIÓN DEL EVENTO dentro de JSX para utilizar un valor al que acceden en ese Scope. Como es el caso de renderizados de listas de componentes con .map. 
      
      Estos renderizan un componente que configura un evento y el controlador del evento debe pasar como argumento un valor obtenido de esa iteración:
      
      >  tasks.map((task)=> <button onClick={handleDelete(task)})) 
      
      De esa forma estaríamos configurado como controlador de un evento una invocación y no una declaración que es lo que hay que PASAR A UNA CONFIGURACIÓN DE EVENTO

      En ese caso y también nos puede interesar por simplificar el código como es el caso del Counter, declaramos el controlador de evento como un arrow function en linea dentro del onClick={} en JSX

         >  tasks.map((task)=> <button onClick={() => handleDelete(task)})) 

         >  onClick={() => setCount(count + 1)}

      De esta forma ahora sí estamos PASANDO EN LA CONFIGURACIÓN DEL EVENTO UNA DECLARACIÓN que cuando se invoque pasara el valor deseado (count o task)
      

      */
