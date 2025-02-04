import { Button } from "@material-tailwind/react";
import Navegacion from "./Navegacion";
import Hero from "/images/illustration-hero.svg";


const Header = () => {
  return (
    <header className="mx-auto w-11/12 xl:w-full">
    <Navegacion />

    <section className="container mx-auto max-w-6xl my-20 xl:my-48  xl:flex xl:flex-row-reverse xl:items-center ">
      <img className="mx-auto lg:max-w-2xl" src={Hero} alt="hero img" />
      <section className="flex flex-col gap-6 text-center xl:text-justify">
        <h1 className="text-3xl font-medium text-slate-700">
          A Simple Bookmark Manager
        </h1>
        <p className="text-gray-600">
          A clean and simple interface to organize your favorite
          websites.Open a new Browswer tab and see your sites load intantly
          .Try it for free
        </p>
        <div className="flex gap-4 justify-center xl:justify-start">
          <Button>Get it on Chrome</Button>
          <Button variant="outlined">Get in on Firefox</Button>
        </div>
      </section>
    </section>
  </header>
  )
}

export default Header