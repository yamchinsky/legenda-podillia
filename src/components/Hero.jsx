import { useNavigate } from "react-router-dom";
import heroImg from "../assets/images/hero.jpg";

export const Hero = () => {
  const navigate = useNavigate();

  const handleReportsClick = () => {
    navigate("/reports");
  };

  return (
    <section
      id="home"
      className="flex flex-col items-center mt-[200px] px-6 lg:px-20"
    >
      <h1 className="text-3xl lg:text-6xl font-extrabold text-center text-stone-900">
        Робимо все можливе <br /> для допомоги ЗСУ
      </h1>
      <p className="mt-5 lg:mt-6 text-sm lg:text-xl text-center text-zinc-700 opacity-60">
        Щодня здійснюємо волонтерську діяльність для забезпечення всім
        необхідним наших військових
      </p>
      <button
        onClick={handleReportsClick}
        className="px-9 lg:px-12 py-2.5 lg:py-3 mt-5 lg:mt-6 text-xs lg:text-base font-bold text-white bg-blue-500 rounded-3xl shadow"
      >
        Переглянути звіти по волонтерству
      </button>
      <img
        src={heroImg}
        alt="volunteering illustration"
        className="object-contain mt-12 lg:mt-20 w-full lg:w-[1027px] rounded-3xl"
      />
    </section>
  );
};
