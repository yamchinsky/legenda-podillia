import vlad from "../assets/images/vlad.jpg";
import pavlo from "../assets/images/pavlo.png";

export const Testimonials = () => {
  return (
    <section className="flex flex-col items-center mt-28 lg:mt-48 px-6 lg:px-20">
      <h2 className="text-sm lg:text-2xl font-semibold text-blue-500">
        Відгуки
      </h2>
      <h3 className="mt-2.5 lg:mt-5 text-2xl lg:text-6xl font-bold text-stone-900">
        Що люди кажуть про нас
      </h3>
      <div className="flex flex-col items-center lg:items-start py-10 lg:py-12 pr-5 lg:pr-10 pl-10 lg:pl-20 mt-9 lg:mt-12 w-full max-w-[340px] lg:max-w-full bg-white rounded-3xl shadow">
        <div className="mb-6">
          <div className="flex gap-8">
            <img
              src={vlad}
              alt="Влад Чельцов"
              className="w-[70px] lg:w-[100px] rounded-full"
            />
            <div className="flex flex-col">
              <div className="text-lg lg:text-xl font-semibold text-blue-500">
                Владислав Чельцов
              </div>
              <div className="mt-2 lg:mt-3 text-xs lg:text-sm opacity-50 text-zinc-700">
                QA Manager
              </div>
            </div>
          </div>
          <p className="mt-9 lg:mt-12 text-sm lg:text-lg leading-6 lg:leading-7 opacity-80 text-zinc-700">
            &quot;Дякую компанії за таку злагоджену роботу по забезпеченню наших
            воїнів всім необхідним в такий важкий для нашої країни час. Ви
            робите неймовірні речі! 💪💪💪 🇺🇦&quot;
          </p>
        </div>
        <div className="mb-6">
          <div className="flex gap-8">
            <img
              src={pavlo}
              alt="Павло Ямчинський"
              className="w-[70px] lg:w-[100px] rounded-full"
            />
            <div className="flex flex-col">
              <div className="text-lg lg:text-xl font-semibold text-blue-500">
                Павло Ямчинський
              </div>
              <div className="mt-2 lg:mt-3 text-xs lg:text-sm opacity-50 text-zinc-700">
                Software developer
              </div>
            </div>
          </div>
          <p className="mt-9 lg:mt-12 text-sm lg:text-lg leading-6 lg:leading-7 opacity-80 text-zinc-700">
            &quot;Завдяки Вашим зусиллям - маємо надійний тил для фронта!&quot;
          </p>
        </div>
      </div>
    </section>
  );
};
