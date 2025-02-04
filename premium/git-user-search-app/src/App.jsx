import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import User from "./components/User";
import { useEffect } from "react";


function App() {

  const [usuario, setUsuario] = useState([])
  const [query , setQuery] = useState('')
  const [error, setError] = useState(false)

  const getUserApi = async(usuario='octocat')=>{
    const url = `https://api.github.com/users/${usuario}`
    const respuesta  = await fetch(url)
    if(!respuesta.ok) throw new Response('Error al conectar con la Url');
    const resultado = await respuesta.json()
    setUsuario(resultado)
  }

  useEffect(()=>{
    getUserApi()
  },[])


  const handleSubmit =(e)=>{
    e.preventDefault()
    getUserApi(query)

    if(query === ''){
      setError(true)
      return
    }
    setQuery('')
    setError(false)
  }
  

  return (
    <>
      <main className="contenedor max-w-3xl h-screen flex flex-col justify-center">
        <Header />
        <Formulario query={query}  setQuery ={setQuery} handleSubmit={handleSubmit} error={error} />
        <User user={usuario} />
      </main>
    </>
  );
}

export default App;
