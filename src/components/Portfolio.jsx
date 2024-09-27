import portfolio1 from "../assets/images/portfolio/porfolio1.jpg";
import portfolio2 from "../assets/images/portfolio/porfolio2.jpg";
import portfolio3 from "../assets/images/portfolio/porfolio3.jpg";

export const Portfolio = () => {
  const portfolioItems = [
    {
      imageSrc:
      portfolio1,
        // 'https://scontent-iev1-1.cdninstagram.com/v/t51.29350-15/449799452_511174187917783_6176224725900920757_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDE5MjAuc2RyLmYyOTM1MC5kZWZhdWx0X2NvdmVyX2ZyYW1lIn0&_nc_ht=scontent-iev1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=z8HpZwk6yxMQ7kNvgGdQ-Ha&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzQwNTAxMTc4MjAwMTM1Mjg0Mw%3D%3D.3-ccb7-5&oh=00_AYA59AreOvxgie-yEGOISV6Zk4bsfzDTW81g-NhVZbvW4w&oe=66F9A0C2&_nc_sid=22de04',
      title: 'Design Furniture App',
    },
    {
      imageSrc:
        // 'https://scontent-iev1-1.cdninstagram.com/v/t39.30808-6/436206850_18041410402843204_2416087286957438633_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi45NjB4NzIwLnNkci5mMzA4MDguZGVmYXVsdF9pbWFnZSJ9&_nc_ht=scontent-iev1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=5McbxMeQ3nQQ7kNvgGrsCsW&_nc_gid=e8ece8321ef94d8aa0e3428cfb7652c7&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzM0Njc4ODc4MzM3MzEyNjM0Ng%3D%3D.3-ccb7-5&oh=00_AYAas1N9SjceVZFXGIPa5k3IGtjB-BXW7f6_3bO8vFengg&oe=66F99C40&_nc_sid=22de04',
      portfolio2,
      title: 'Cloud App',
    },
    {
      imageSrc:
      portfolio3,
        // 'https://scontent-iev1-1.cdninstagram.com/v/t39.30808-6/455102318_18053294554843204_1124002863244481315_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjAweDE1MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-iev1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=dgLjQ4d3buYQ7kNvgHMunat&_nc_gid=771d7f07c9654481a25a7af1a2619661&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzQzMzAyNzkwMzc3ODM1NTgzNg%3D%3D.3-ccb7-5&oh=00_AYC4ZuphHfPqTN4sOz3XTUu__02Wg6hthVegJ7Z262Orng&oe=66F9B087&_nc_sid=22de04',
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