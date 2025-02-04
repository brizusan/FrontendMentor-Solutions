import { useState  , useEffect} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Charts from './components/Charts'
import { userData } from './data'


function App() {

  const [datos, setDatos] = useState({
    labels: userData.map((data) => data.day),
    datasets: [
      { 
        label:"spending",
        data: userData.map((data) => data.amount),
        backgroundColor: [
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(186, 34%, 60%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)"
          
        ],
        borderWidth: 2,
        borderRadius:5,
      },
    ],
  });

  return (
    <>
      <Header />

      <section className='w-5/6 mx-auto my-8 max-w-3xl bg-white py-10 px-6  sm:p-12 rounded-2xl'>
        <h1 className='font-bold tracking-wide text-4xl'>Spending - Last 7 days</h1>
        <Charts datos={datos}/>
        <div className='barrita'></div>
        <Footer />
      </section>
    </>

    
   
  )
}

export default App
