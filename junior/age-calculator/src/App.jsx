import { useState } from "react";

function App() {
  const [data, setData] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [resultado , setResultado] = useState('')

  const [error, setError] = useState(false);

  const fullyear = new Date().getFullYear()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(data).includes("")) {
      setError(true);
      return;
    }

    const resultado = calcularEdad()
    setResultado(resultado)

    console.log(resultado)

    setError(false);
  };

  const calcularEdad=()=>{
    let dias =  30 -parseInt(data.day)
    let meses = 12 -parseInt(data.month)
    let año = fullyear - parseInt(data.year)

    return {
      dias,meses,año
    }
  }

  return (
    <>
      <main className="max-w-2xl mx-auto ">
        <h1 className=" uppercase text-center text-2xl lg:text-4xl font-semibold text-gray-600 py-12">
          Age Calculator App
        </h1>
        <div className="bg-white shadow-md w-11/12 mx-auto py-10 rounded-t-2xl rounded-bl-2xl rounded-br-[90px]">
          {error && (
            <p className="text-center mb-2 text-red-500 text-sm font-bold">
              campos obligatorios
            </p>
          )}
          <form onSubmit={handleSubmit} className="w-5/6 mx-auto">
            <div className="grid grid-cols-3 gap-4 lg:w-5/6">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="day"
                  className={`${
                    error ? "text-red-500" : "text-gray-700"
                  }  font-bold uppercase text-lg`}
                >
                  Day
                </label>
                <input
                  type="text"
                  id="day"
                  className="font-bold placeholder:text-gray-500 py-3 pl-4 rounded-lg border border-gray-200"
                  placeholder="00"
                  value={data.day}
                  onChange={(e) => setData({ ...data, day: e.target.value })}
                />
                {
                  error && <small  className="text-red-500 font-bold italic">day 1-30</small>
                }
            
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="month"
                  className={`${
                    error ? "text-red-500" : "text-gray-700"
                  }  font-bold uppercase text-lg`}
                >
                  Month
                </label>
                <input
                  type="text"
                  id="month"
                  placeholder="00"
                  className="placeholder:text-gray-500 font-bold py-3 pl-4 rounded-lg border border-gray-200"
                  onChange={(e) => setData({ ...data, month: e.target.value })}
                />
                     {
                  error && <small  className="text-red-500 font-bold italic">month 1-12</small>
                }
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="year"
                  className={`${
                    error ? "text-red-500" : "text-gray-700"
                  }  font-bold uppercase text-lg`}
                >
                  Year
                </label>
                <input
                  type="text"
                  id="year"
                  className=" font-bold placeholder:text-gray-500 py-3 px-4 rounded-lg border border-gray-200"
                  placeholder="0000"
                  onChange={(e) => setData({ ...data, year: e.target.value })}
                />
                     {
                  error && <small  className="text-red-500 font-bold italic"> 1999 - {fullyear} </small>
                }
              </div>
            </div>

            <div className="py-14 col-span-3 relative">
              <div className="block w-full h-[2px] bg-red-50"></div>
              <button
                type="submit"
                className="absolute top-6 left-[40%] lg:left-auto lg:right-0 bg-violet-500 hover:bg-slate-900 w-16 h-16 rounded-full flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="36"
                  viewBox="0 0 46 44"
                >
                  <g fill="none" stroke="#FFF" strokeWidth="2">
                    <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
                  </g>
                </svg>
              </button>
            </div>
          </form>

          <section className="text-7xl font-bold text-left grid justify-center lg:justify-start pl-12">
            <h2 className="text-violet-600">
              {" "}
              {resultado == "" ? "--" : resultado.año}{" "}
              <span className=" italic text-slate-800">years</span>
            </h2>
            <h2 className="text-violet-600">
              {" "}
              {resultado == "" ? "--" : resultado.meses}{" "}
              <span className=" italic text-slate-800">months</span>
            </h2>
            <h2 className="text-violet-600">
              {" "}
              {resultado== "" ? "--" : resultado.dias}{" "}
              <span className=" italic text-slate-800">days</span>
            </h2>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
