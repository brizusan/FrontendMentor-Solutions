import { useState } from "react";
import Formulario from "./components/Formulario";
import Thanks from "./components/Thanks";

function App() {
  const [validate, setValidate] = useState(false);
  const [datos, setDatos] = useState(null);



  return (
    <main className="min-h-screen flex justify-center sm:items-center">
      <section className="bg-white w-full max-w-4xl sm:rounded-lg sm:py-5 sm:px-3 mx-auto sm:grid sm:grid-cols-2 sm:gap-6">
        <div className="image sm:col-start-2"></div>
        <div className="flex flex-col gap-8 pt-8 w-5/6 mx-auto sm:self-center sm:col-start-1 sm:row-start-1">
          {
            !validate && <Formulario setDatos={setDatos} setValidate={setValidate} validate={validate}/>
          }
          {
            validate && <Thanks datos={datos} setValidate={setValidate}/>
          }
          
        </div>
      </section>
    </main>
  );
}

export default App;
