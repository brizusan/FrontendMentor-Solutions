import { useState , useEffect } from 'react'
import Logo from '/images/logo.svg'
import Icon1 from '/images/icon-document.svg'
import Icon2 from '/images/icon-folder.svg'
import Icon3 from '/images/icon-upload.svg'

function App() {

  const [images, setImages] = useState([]);
  const [value, setValue] = useState(0);
  const [residuo, setResiduo] = useState(0);

  useEffect(() => {
    setImages([Icon1,Icon2,Icon3])
  }, []);

  useEffect(() => {
    const resta =  1000 - value;
    setResiduo(resta)
  }, [value]);
  

  return (
    <main className="contenido">
      <section className='card brand'>
        <img src={Logo} width={150} alt="logo brand name-emp" />
        <article className='list-items'>
          {
            images.map( (img,index) =>(
              <div className='icons'>
                <img  
                  className='icon'
                  key={index} 
                  src={img}
                  alt='img name'
                  />
              </div>
            ))
          }
        </article>
      </section>
      <section className='card space'>
        <p className='subtitle' >You've use <span> {value} GB </span>of your storage</p>
        <input
          className='range'
          type="range" 
          value={value}
          onChange= { e=> setValue(e.target.value)}
          min={0} 
          max={1000}
          style={
            {backgroundImage: `linear-gradient(to right, var(--Gradient) 0%, var(--Gradient-2) ${(value/10)}%, var(--Very-Blue) 0%, var(--Very-Blue) ${residuo}%)`}
          }
          />
        <div className='values'>
          <small>0GB</small>
          <small>1000GB</small>
        </div>
        <div className='space__value'>
          <h1>{residuo}</h1>
          <span>gb left</span>
        </div>
        <div className="triangulo"></div>
      </section>
    </main>
  )
}

export default App
