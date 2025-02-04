import Hero from "/images/illustration-working.svg";
import Navegacion from "./Navegacion";

const Header = () => {
  return (
    <header className="container">
    <Navegacion />
    <section className="hero">
      <img className="hero__img" src={Hero} alt="hero image working" />
      <div className="hero__content">
        <h1 className="title">More than just shorter links</h1>
        <p className="paragraph">
          Build your brand recognition and get detailed insights on how your
          links are performing.
        </p>
        <div>
          <button className="btn-rounded">Get Started</button>
        </div>
      </div>
    </section>
    </header>
  )
}

export default Header