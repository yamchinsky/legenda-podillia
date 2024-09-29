import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { handleNavigation } from "../utils/handleNavigation";

import logo from "../assets/logo.jpg";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="flex flex-col items-center justify-center px-7 lg:px-20 py-14 bg-neutral-700 text-white">
      <div className="mb-6 lg:mb-12">
        <div
          className="flex items-center gap-3 px-7 py-5 bg-white rounded-3xl text-stone-900"
          onClick={() => handleNavigation(navigate, "home")}
        >
          <img src={logo} alt="Agency logo" className="w-[70px]" />
          <div>
            <div className="text-xl font-bold">Легенда</div>
            <div className="text-base">Поділля</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full max-w-[1234px]">
        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start w-full justify-center lg:justify-between">
          <nav className="flex flex-col items-center lg:items-start text-xl font-light">
            <h3 className="text-2xl font-bold">
              ГО &quot;ЛЕГЕНДА ПОДІЛЛЯ&quot;
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#home" className="hover:underline">
                  Головна
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  Про нас
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Зв&apos;язатися з нами
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col items-center lg:items-start text-xl font-light">
            <h3 className="text-2xl font-bold">КОНТАКТИ</h3>
            <p className="mt-4">(+38) (097) 080-47-95</p>
            <p>legenda@i.ua</p>
          </div>
          <div className="flex flex-col items-center lg:items-start text-xl font-light">
            <address className="text-center lg:text-left not-italic">
              <h3 className="text-2xl font-bold">АДРЕСА</h3>
              <p className="mt-4">
                32300, ХМЕЛЬНИЦЬКА область,
                <br />
                КАМ&apos;ЯНЕЦЬ-ПОДІЛЬСЬКИЙ район, село ГУМЕНЦІ,
                <br />
                вулиця ПЕРШОТРАВНЕВА, будинок 20-А
                <br />
                legenda@i.ua
              </p>
            </address>
          </div>
        </div>
        <div className="flex gap-5 mt-10 justify-center">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500"
          >
            <FaWhatsapp size={30} />
          </a>
        </div>
        <hr className="mt-4 w-full lg:w-[500px] border border-white" />
        <p className="mt-4 text-lg text-center">
          2024 ГО &quot;ЛЕГЕНДА ПОДІЛЛЯ&quot;. Всі права захищені.
        </p>
      </div>
    </footer>
  );
};
