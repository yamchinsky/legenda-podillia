import contactUsImg from "../assets/images/contactUs.jpg";
import { useNavigate } from "react-router-dom";

export const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <section
      id="contact"
      className="flex flex-col items-center mt-24 lg:mt-60 px-6 lg:px-20"
    >
      <div className="flex flex-col lg:flex-row items-start lg:justify-between w-full">
        <div className="lg:w-1/2">
          <h2 className="text-3xl lg:text-6xl font-bold text-stone-900">
            Зацікавлені в співпраці з нами?
          </h2>
          <p className="mt-6 text-sm lg:text-xl leading-6 lg:leading-9 text-zinc-700">
            Бажаєте разом із нами допомогати ЗСУ та людям, які потребують
            підтримки в місцях окупації?
          </p>
          <button
            onClick={() => navigate("/donate")}
            className="px-9 lg:px-12 py-2.5 lg:py-3 mt-6 text-xs lg:text-base font-bold text-white bg-blue-500 rounded-3xl shadow"
          >
            Задонатити
          </button>
        </div>
        <img
          src={contactUsImg}
          alt="Collaboration illustration"
          className="object-contain mt-12 lg:mt-0 w-full lg:w-1/2 rounded-2xl"
        />
      </div>
    </section>
  );
};
