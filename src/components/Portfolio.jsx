import portfolio1 from "../assets/images/portfolio/porfolio1.jpg";
import portfolio2 from "../assets/images/portfolio/porfolio2.jpg";
import portfolio3 from "../assets/images/portfolio/porfolio3.jpg";

export const Portfolio = () => {
  const portfolioItems = [
    {
      imageSrc:
      portfolio1,
      title: 'Design Furniture App',
    },
    {
      imageSrc:
      portfolio2,
      title: 'Cloud App',
    },
    {
      imageSrc:
      portfolio3,
      title: 'Design Byte App',
    },
  ];

  return (
    <section className="flex flex-col items-center mt-20 lg:mt-32 px-6 lg:px-20">
      <h2 className="text-sm lg:text-2xl font-semibold text-blue-500">Фото звітність</h2>
      <h3 className="mt-2.5 lg:mt-5 text-2xl lg:text-6xl font-bold text-stone-900">Що ми робимо</h3>
      <p className="mt-9 lg:mt-6 text-sm lg:text-xl text-center text-zinc-700">
        Наша діяльність допомогає тисячам бійців. що воюють за нашу свободу
      </p>
      <div className="flex flex-wrap gap-5 justify-center mt-9 lg:mt-12">
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={index} {...item} className='rounded-3xl'/>
        ))}
      </div>
      <button className="px-9 lg:px-12 py-2.5 lg:py-3 mt-12 text-base font-bold text-blue-500 border border-blue-500 rounded-3xl shadow">
        Дивитися ще
      </button>
    </section>
  );
};

const PortfolioItem = ({ imageSrc, title }) => (
  <div className="flex relative flex-col px-7 pt-64 pb-6 mt-9 w-full text-2xl font-bold tracking-normal leading-none text-white aspect-square max-w-[300px] rounded-[30px]">
    <img src={imageSrc} alt={title} className="object-cover absolute inset-0 size-full rounded-3xl" />
    {title}
  </div>
);