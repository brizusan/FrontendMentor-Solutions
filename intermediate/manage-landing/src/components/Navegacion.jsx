import Logo from "/images/logo.svg";
import close from "/images/icon-close.svg";
import open from "/images/icon-hamburger.svg";
import { navegacion } from "../data";

const Navegacion = ({icon , setIcon}) => {
  return (
    <header className="contenedor py-6 md:py-2 flex justify-between md:items-center">
    <a href="#">
      <img src={Logo} alt="manage brand logo" />
    </a>

    <div className="md:hidden cursor-pointer">
      {!icon ? (
        <img src={open} onClick={()=>setIcon(!icon)} alt="icon open" />
      ) : (
        <img src={close} onClick={()=>setIcon(!icon)}  alt="icon close" />
      )}
    </div>
    <nav className="w-11/12 mx-auto my-10 absolute md:relative">
      <ul className={`${icon ? 'flex' : 'hidden'} bg-white md:bg-inherit shadow md:shadow-none md:flex flex-col md:flex-row md:justify-end gap-6 py-6 md:py-0 items-center rounded-md`} >
        {navegacion?.map((nav) => (
          <li key={nav.id}>
            <a
              href={nav.url}
              className="capitalize font-bold hover:underline transition-all"
            >
              {nav.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
  )
}

export default Navegacion