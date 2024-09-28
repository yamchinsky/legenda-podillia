import { FaPlay } from "react-icons/fa";
import teamImg from "../assets/images/team.jpg";
import ourHistoryVideo from "../assets/videos/history-video.mp4";

export const AboutUs = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center mt-24 lg:mt-40 px-6 lg:px-20"
    >
      <h2 className="text-sm lg:text-2xl font-semibold text-blue-500">
        Про нас
      </h2>
      <h3 className="mt-2.5 lg:mt-5 text-2xl lg:text-6xl font-bold text-stone-900">
        Наша Команда
      </h3>
      <div className="flex flex-col lg:flex-row items-center mt-9 lg:mt-10 w-full max-w-[340px] lg:max-w-full">
        <div className="w-full lg:w-6/12">
          <img
            src={teamImg}
            alt="Team photo"
            className="object-contain w-full rounded-3xl bg-zinc-300 aspect-[1.47] lg:aspect-[1.32]"
          />
        </div>
        <div className="flex flex-col items-center lg:ml-5 w-full lg:w-6/12 text-center lg:text-left mt-7 lg:mt-0">
          <p className="leading-8 text-zinc-700">
            ГРОМАДСЬКА ОРГАНІЗАЦІЯ ЛЕГЕНДА ПОДІЛЛЯ
          </p>
          <p className="mt-2.5 lg:mt-6 leading-8 text-zinc-700">
            Ми, громадська організація, яка допомагає ЗСУ та людям, які
            потребують допомоги в місцях окупації
          </p>
          <div className="flex gap-5 justify-center mt-6 w-full">
            <button className="w-full px-9 lg:px-12 py-2.5 lg:py-3 font-bold text-white bg-blue-500 rounded-3xl shadow hover:bg-red-500 hover:text-white transition">
              <a
                href="https://www.instagram.com/legendapodillia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Про нас
              </a>
            </button>
            <button className="w-full justify-center">
              <a
                href={ourHistoryVideo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-9 lg:px-12 py-2.5 lg:py-3 font-semibold text-blue-500 border border-blue-500 rounded-3xl hover:bg-red-500 hover:text-white transition"
              >
                <FaPlay className="w-6 lg:w-4" />
                Наша історія
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
