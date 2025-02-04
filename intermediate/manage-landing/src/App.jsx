import { useState } from "react";
import Navegacion from "./components/Navegacion";
import Tracks from "./components/Tracks";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Slider from "./components/Slider";


function App() {

  const [icon, setIcon] = useState(false);
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = e =>{
    e.preventDefault()
    const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;


    if(email === ''){
      setError('email is required')
      console.log('error')
      return
    }

    if(!validEmail.test(email)){
      setError("enter a valid email")
      return
    }

    setError(null)
    alert('Subscribed')
    setEmail('')

  }

  return (
    <>
      <div className="intro">
        <Navegacion icon={icon} setIcon={setIcon} />
        <Intro />

        <main className="pt-20 lg:pt-32">
          <Tracks />

          <section>
            <h2 className="subtitle pb-10 md:pb-24">What they’ve said</h2>
            <Slider />
          </section>
        </main>
      </div>

      <div className="flex justify-center py-20 lg:py-32">
        <button className="cta">Get Started</button>
      </div>

      <section className="simple bg-red-600/80 py-20 lg:py-28">
        <div className="contenedor flex flex-col gap-10 items-center lg:flex-row lg:justify-between">
          <h2 className="text-4xl lg:text-5xl text-white font-medium text-center max-w-2xl lg:text-left">
            Simplify how your team works today
          </h2>
          <button className="cta-m">Get Started</button>
        </div>
      </section>

      <Footer email={email} setEmail={setEmail} handleSubmit={handleSubmit} error={error} setError={setError} />
    </>
  );
}

export default App;
