import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Short from "./components/Short";

const getLocalStorage = () => {
  let links = localStorage.getItem("link");

  if (links) {
    return JSON.parse(localStorage.getItem("link"));
  } else {
    return [];
  }
};

function App() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);
  const [copy, setCopy] = useState("copy");
  const [link, setLink] = useState(getLocalStorage);
  const [loader, setLoader] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (url === "") {
      setError(true);
      return;
    }
    setError(false);
    getData(url);
    setUrl("");
  };

  const getData = async (link) => {
    try {
      setLoader(true);
      const url = `https://api.shrtco.de/v2/shorten?url=${link}`;
      const respuesta = await fetch(url);
      if (!respuesta.ok) throw new Error("Error en la url");
      const datos = await respuesta.json();
      setLink(datos.result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  const handleclick = () => {
    const text = navigator.clipboard.writeText(link.full_short_link);
    console.log(text);
    setCopy("Copied");
  };

  useEffect(() => {
    localStorage.setItem("link", JSON.stringify(link));
  }, [link]);

  return (
    <>
      <Header />
      <main className="main">
        <section className="form__links container">
          <Formulario
            setUrl={setUrl}
            url={url}
            error={error}
            handleSubmit={handleSubmit}
          />
        </section>

        {loader && <Loader />}

        { link?.code?.length > 1  ? (
          <section className="container my-5">
            <Short handleclick={handleclick} copy={copy} link={link} />
          </section>
        ) : null}

        <section className="stadistics container">
          <div className="stadistics__texts">
            <h2 className="subtitle">Advanced Stadistics</h2>
            <p className="paragraph-sm">
              Track how your links are performing. across the web tith our
              advanced stadistics dashboards.
            </p>
          </div>
          <Cards />
        </section>
        <section className="links">
          <h2>Bosst your links today</h2>
          <button className="btn-rounded">Get Started</button>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
