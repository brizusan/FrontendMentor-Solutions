import { useState } from "react";
import Thanks from "./Components/Thanks";
import Header from "./Components/Header";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [codigo, setCodigo] = useState();
  const [mes, setMes] = useState("01/23");
  const [validate, setValidate] = useState(false);

  const handleLimitNumber = (e) => {
    const limit = 3;
    setCodigo(e.target.value.slice(0, limit));
  };

  const limpíar =() =>{
    setName('')
    setNumber('')
    setCodigo('')
    setMes('01/23')
  }

  return (
    <div className="grid">
      <Header name={name} number={number} codigo={codigo} fecha={mes} />
      <main className="my-36">
        <div className="container mx-auto w-full">
        {
          !validate && (
            
          <form className="flex flex-col gap-3 w-5/6 mx-auto">
            <div className="caja flex flex-col">
              <label className="uppercase tracking-widest">
                cardholder name
              </label>
              <input
                type="text"
                placeholder="e.g Jane Appleseed"
                onChange={(e) => setName(e.target.value)}
                value={name}
                name="name"
                maxLength={15}
              />
            </div>
            <div className="caja flex flex-col">
              <label className="uppercase tracking-widest">card number</label>
              <input
                type="text"
                placeholder="e.g 1234 4678 9123"
                maxLength={19}
                onChange={(e) => setNumber(e.target.value)}
                value={number
                  .replace(/\s/g, "")
                  .replace(/(\d{4})/g, "$1 ")
                  .trim()}
              />
            </div>
            <div className="cajas flex">
              <div className="caja">
                <label className="uppercase tracking-widest">
                  exp. date (mm/yy)
                </label>
                <input
                  type="month"
                  placeholder="MM/dd"
                  onChange={(e) => setMes(e.target.value)}
                  value={mes}
                />
              </div>
              <div className="caja flex flex-col">
                <label className="uppercase tracking-widest">cvc</label>
                <input
                  type="number"
                  name="codigo"
                  placeholder="e.g. 123"
                  maxLength={3}
                  onChange={handleLimitNumber}
                  value={codigo}
                />
              </div>
            </div>
            <button onClick={()=>setValidate(true)}
              type="submit"
              className="mt-5 py-3 bg-slate-900 hover:bg-slate-800 text-white tracking-wider rounded-lg">
              Confirm
            </button>
          </form>
          )
        }
        </div>
        {validate && <Thanks setValidate={setValidate} limpiar={limpíar}/>}
      </main>
    </div>
  );
}

export default App;
