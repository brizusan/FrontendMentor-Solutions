import HeaderImg from "/images/image-jeremy.png";
import SproudImg from "/images/icon-ellipsis.svg";
import { useState } from 'react';
import Datos from '../src/data/datos.json';
import Card from "./components/Card";


function App() {

  const [time, setTime] = useState("Weekly");
  const times= ['Daily','Weekly','Monthly']

  return (
    <div className="contenedor">
      <aside className="max-w-sm  w-5/6 mx-auto bg-slate-800 rounded-b-xl rounded-xl overflow-hidden">
        <article className="bg-indigo-700 p-6 rounded-xl  flex gap-5 items-center xl:flex-col xl:items-start xl:pl-6 xl:pr-10">
          <img
          className="rounded-full border-2" 
          src={HeaderImg} alt="header image person" width={50}/>
          <div className="xl:pt-4">
            <small className="text-gray-400">Report for</small>
            <h1 className="text-xl text-gray-200 xl:text-4xl">Jeremy Robson</h1>
          </div>
        </article>
        <ul className="bg-slate-800 flex justify-between py-3 px-6 xl:flex-col xl:gap-4 xl:py-6">
        {
          times.map( t=>(
            <li 
              key={t}
              onClick={()=>setTime(t)}
              className={time === t ? 'text-gray-100' : 'text-gray-400'}>
              {t}
            </li>
          ))
        }
        </ul>
      </aside>
      <main>
        <section className="cards">
          {
            Datos.map( data =>(
              <Card key={`card-article-${data.title}`} data={data} times={time}/>
            ))
          }
        </section>
      </main>
   
    </div>
  );
}

export default App;
