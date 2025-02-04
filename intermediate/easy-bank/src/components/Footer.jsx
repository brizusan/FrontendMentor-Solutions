import Logo from "/images/logo-m.svg";
import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-slate-800 py-10">
      <div className="wrapper flex flex-col gap-10  items-center md:grid  md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
        <img src={Logo} alt="footer logo" />

        <section className="flex justify-center gap-6 md:col-start-1 lg:justify-start">
          <AiOutlineFacebook className="icon" color="#fff" fontSize={26} />
          <AiFillYoutube className="icon" color="#fff" fontSize={26} />
          <AiOutlineTwitter className="icon" color="#fff" fontSize={26} />
          <BsPinterest className="icon" color="#fff" fontSize={26} />
          <AiOutlineInstagram className="icon" color="#fff" fontSize={26} />
        </section>

        <nav className="text-gray-300 lg:col-start-2 lg:row-start-1 lg:row-end-3">
          <ul className="text-center flex flex-col gap-4 md:grid md:grid-cols-2">
            <li>
              <a className="hover:underline hover:text-gray-50" href="#">
                About us
              </a>
            </li>
            <li>
              <a className="hover:underline hover:text-gray-50" href="#">
                Contact
              </a>
            </li>
            <li>
              <a className="hover:underline hover:text-gray-50" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="hover:underline hover:text-gray-50" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="hover:underline hover:text-gray-50" href="#">
                Support
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex justify-center lg:col-start-4 lg:row-start-1">
          <button className="btn">Request Invite</button>
        </div>

        <div className="lg:col-start-4">
          <p className="text-gray-300 text-center">
            {" "}
            © Easybank.All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
