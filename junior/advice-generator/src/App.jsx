/* eslint-disable react/no-unescaped-entities */
import DividerMobile from "./assets/images/pattern-divider-mobile.svg";
import DividerDesktop from "./assets/images/pattern-divider-desktop.svg";
import { useState } from "react";
import { useEffect } from "react";



function App() {

  const [mensaje, setMensaje] = useState('')

  useEffect(() => {
    obtenerMensaje()
  }, [])
  const obtenerMensaje = async()=>{
    const url = `https://api.adviceslip.com/advice`

    try {
      const res = await fetch(url)
      if(!res.ok) throw new Error('Error al conectactar con la url')
      const {slip} = await res.json()
      setMensaje(slip)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <>
      <header className=" font-bold">
        <h1 className="text-center text-5xl text-white py-16">
          Advide Generator
        </h1>
      </header>


      <main className="relative left-0 right-0 bg-slate-700 p-8 w-5/6 mx-auto rounded-2xl space-y-5 lg:space-y-8 pb-16 text-center max-w-xl">
        <h2 className="tracking-widest uppercase font-medium text-green-400">
          Advice #{mensaje.id}
        </h2>
        <p className="text-white font-bold text-xl antialiased">
         {`"${mensaje.advice}"`}
        </p>
        <div className="flex justify-center">
          <img src={DividerMobile} className="lg:hidden" />
          <img src={DividerDesktop} className="hidden lg:block" />
        </div>
        <button 
          onClick={obtenerMensaje}
          className="absolute -bottom-6 right-[45%] bg-green-400 hover:cursor-pointer hover:bg-green-300 w-14 h-14 rounded-full flex items-center justify-center">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </button>
      </main>
    </>
  );
}

export default App;
