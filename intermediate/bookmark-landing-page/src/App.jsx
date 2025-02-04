import { useState } from "react";
import MenuTabs from "./components/MenuTabs";
import Cards from "./components/Cards";
import { Button } from "@material-tailwind/react";
import Questions from "./components/Questions";
import Formulario from "./components/Formulario";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    

    if (email === "") {
      setError("required field");
      return;
    }

    if(!validEmail.test(email)){
      setError("enter a valid email")
      return
    }

    setError(null)
  };

  return (
    <div>
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <main className="mx-auto xl:w-full lg:pt-10">
        {/*  Features */}
        <section className="container mx-auto max-w-6xl w-11/12 text-center">
          <h2 className="text-slate-700 text-center text-3xl">Features</h2>
          <p className="text-gray-700 py-4 max-w-md mx-auto">
            Our aims is to make it quick and easy for you to access your
            favorite websites.Your bookmarks sync between your devices so you
            can access them on the go.
          </p>

          <section className="w-full">
            <MenuTabs />
          </section>
        </section>

        {/* Extensions */}
        <section className="cards text-center py-20 lg:py-40 max-w-6xl w-11/12 mx-auto">
          <h2 className="text-slate-700 text-center text-3xl">
            Download the extension
          </h2>
          <p className="text-gray-700 py-4 lg:max-w-md mx-auto ">
            Weve got more browser in the pipeline.Please do let us know if you
            have got a favourite you like us to prioritize.
          </p>
          <div className="grilla my-8 ">
            <Cards />
          </div>
        </section>

        {/*  Questions */}
        <section className="max-w-6xl w-11/12 pb-20 mx-auto ">
          <h2 className="text-slate-700 text-center text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 py-4 text-center mx-auto max-w-lg">
            Here are some of our FAQs.If you have any other questions do you
            like answered please fell free to email us.
          </p>

          <section className="my-10 max-w-xl mx-auto">
            <Questions />
            <div className="mt-10 flex justify-center">
              <Button>More Info</Button>
            </div>
          </section>
        </section>

        {/* Forms */}
        <section className="flex flex-col gap-8 justify-center items-center bg-indigo-500 text-white py-16 px-6 lg:py-20">
          <div className="flex flex-col gap-2 justify-center items-center text-center">
            <small className="tracking-[.5em] uppercase">
              35,000 + already joined
            </small>
            <h2 className="text-3xl">Stay up-to-date with what where doing</h2>
          </div>

          {error && 
              <small className="text-white bg-red-500 text-center px-2 rounded-md">
                {error}
              </small>
          }

          <Formulario handleSubmit={handleSubmit} email={email} setEmail={setEmail}/>
        </section>
      </main>
      
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
