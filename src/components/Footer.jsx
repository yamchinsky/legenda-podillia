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
            <ul className="mt-4 space-y-2 text-center lg:text-start">
              <li onClick={() => handleNavigation(navigate, "home")}>
                <a className="hover:underline">
                  Головна
                </a>
              </li>
              <li onClick={() => handleNavigation(navigate, "about")}>
                <a href="#about" className="hover:underline">
                  Про нас
                </a>
              </li>
              <li onClick={() => handleNavigation(navigate, "contact")}>
                <a href="#contact" className="hover:underline">
                  Зв&apos;язатися з нами
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-start text-xl font-light">
            <h3 className="text-2xl font-bold">КОНТАКТИ</h3>
            <p className="mt-4">(+38) (097) 080-47-95 - Вікторія Кшемінська</p>
            <p className="mt-4">(+38) (098) 994-11-24 - Альбіна Гуменюк</p>
            <p className="mt-4">legendapodillia@gmail.com</p>
          </div>
          <div className="flex flex-col items-center lg:items-start text-xl font-light">
            <address className="text-center lg:text-left not-italic">
              <h3 className="text-2xl font-bold">АДРЕСА</h3>
              <p className="mt-4">
              офіс: Кн.Коріатовичів 5, 
              <br /> 
              м.Кам’янець-Подільський, 
              </p>
              <p className="mt-2">
                юридична адреса:
                32325, ХМЕЛЬНИЦЬКА область,
                <br />
                КАМ&apos;ЯНЕЦЬ-ПОДІЛЬСЬКИЙ район, село Гуменці,
                <br />
                вулиця ПЕРШОТРАВНЕВА, будинок 20-А
              </p>
            </address>
          </div>
        </div>
        <div className="flex gap-5 mt-10 justify-center">
          <a
            href="https://www.facebook.com/profile.php?id=61556114894580"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.instagram.com/volonterylegendapodillia"
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
