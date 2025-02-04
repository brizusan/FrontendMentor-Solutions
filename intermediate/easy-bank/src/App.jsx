import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Header setMenu={setMenu} menu={menu} />
      <Hero />
      <Main />
      <Footer />
      
    </>
  );
}

export default App;
