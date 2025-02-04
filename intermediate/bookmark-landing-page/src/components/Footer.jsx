import Logo from "/images/logo-bookmark-m.svg";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-blue-gray-900 py-10">
      <div className="flex flex-col gap-10 max-w-6xl mx-auto lg:grid lg:grid-cols-2 xl:grid-cols-3 place-content-between">
        <div className="flex justify-center xl:justify-start">
          <img src={Logo} alt="logo brand " />
        </div>
        <nav className="text-white uppercase text-base">
          <ul
            className="flex flex-col gap-4 items-center justify-center
            md:flex-row"
          >
            <li>
              <a className="hover:underline hover:text-red-400" href="#">
                Features
              </a>
            </li>
            <li>
              <a className="hover:underline hover:text-red-400" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="hover:underline hover:text-red-400" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center gap-4 xl:justify-end">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <AiFillFacebook className="icon" size={25} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <AiOutlineTwitter className="icon" size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
