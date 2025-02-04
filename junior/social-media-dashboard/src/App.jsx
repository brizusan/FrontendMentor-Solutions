import { data, stats } from "./data/datos";
import { useState, useEffect } from "react";
import Subscribers from "./components/Subscribers";
import Stats from "./components/Stats";
import Header from "./components/Header";

function App() {
  const [datos, setDatos] = useState([]);
  const [estadisticas, setEstadisticas] = useState([]);

  useEffect(() => {
    setDatos(data);
    setEstadisticas(stats);
  }, []);

  return (
    <>
    <Header />
    <main>
      <div className="container mx-auto max-w-screen-xl lg:mb-12 ">
        <div className="cards__follows lg:gap-4">
          {datos.map((dato, index) => (
            <Subscribers key={`card-item-${index}`} {...dato} />
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-screen-xl lg:mb-12 lg:mt-12">
        <h1 className="font-bold text-gray-500 dark:text-white text-2xl pb-8
        pl-14 xl:pl-0">
          Overviews - Today
        </h1>
        <div className="cards__stats">
          {estadisticas?.map((stat, index) => (
            <Stats key={`card-stat-item-${index}`} {...stat} />
          ))}
        </div>
      </div>
    </main>
    </>
  );
}

export default App;
