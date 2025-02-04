import FooterLogo from "/images/logo-m.svg";
import { navegacion } from "../data";
import { icons } from "../data";

const Footer = ({email,setEmail,handleSubmit , error}) => {
  return (
    <footer className="bg-gray-900 py-20 lg:py-16">
      <div className="contenedor flex flex-col gap-10 lg:grid lg:grid-cols-3 xl:grid-cols-4">
        <form 
          onSubmit={handleSubmit}
          className="relative flex gap-3 max-w-sm mx-auto lg:m-0 lg:col-start-4 lg:items-start">
          
          <input
            className={`${error ? 'border-2 border-red-500' : ' '} py-2 px-5 rounded-2xl flex-1`}
            type="text"
            placeholder="updates in your inbox..."
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
          <input
            className="bg-orange-600 text-white py-2 px-6 rounded-2xl cursor-pointer"
            type="submit"
            value="GO"
          />
          <small className="error">{error}</small>
        </form>

        <nav className="grid grid-cols-2 lg:gap-3 justify-items-center pb-5 lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-3">
          {navegacion.map((n) => (
            <li
              key={n.id}
              className="text-white capitalize text-left hover:cursor-pointer hover:underline"
            >
              {n.name}
            </li>
          ))}
        </nav>

        <div className="flex items-center justify-center gap-8 lg:col-start-1 lg:justify-start lg:row-start-2">
          {icons.map((i) => (
            <img className="hover:cursor-pointer" key={i.id} src={i.url} />
          ))}
        </div>

        <img
          className="block mx-auto lg:col-start-1 lg:m-0 lg:row-start-1"
          src={FooterLogo}
          alt="footer logo manage"
        />

        <div className="text-center lg:col-start-4">
          <p className="text-gray-400">
            Copyrigth {new Date().getFullYear()}.All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
