import food from '../assets/icons/food.svg';
import meds from '../assets/icons/meds.svg';
import people from '../assets/icons/people.svg';
import tools from '../assets/icons/tools.svg';

export const Services = () => {
  const services = [
    {
      imageSrc:
        // 'https://cdn.builder.io/api/v1/image/assets/TEMP/7f2cf0e4-b427-4712-9182-8c82ddd6c375?placeholderIfAbsent=true&apiKey=abebaea06a0b4baf870a7ab86f500c96',
      meds,
      title: 'Допомога з медикаментами',
      bgColor: 'bg-red-500',
    },
    {
      imageSrc:
      food,
        // 'https://cdn.builder.io/api/v1/image/assets/TEMP/5175c859-1862-47d5-a305-13a84e12b0c2?placeholderIfAbsent=true&apiKey=abebaea06a0b4baf870a7ab86f500c96',
      title: 'Постачання продуктів харчування та непродовольчих товарів',
      bgColor: 'bg-lime-400',
    },
    {
      imageSrc:
        // 'https://cdn.builder.io/api/v1/image/assets/TEMP/d0c86078-b6b1-41ff-bc63-e89b09e75d55?placeholderIfAbsent=true&apiKey=abebaea06a0b4baf870a7ab86f500c96',
      people,
      title: 'Поміч людям, потерпілим від окупації',
      bgColor: 'bg-amber-500',
    },
    {
      imageSrc:
        // 'https://cdn.builder.io/api/v1/image/assets/TEMP/f069d366-f5f3-4e3d-a820-a962405acf44?placeholderIfAbsent=true&apiKey=abebaea06a0b4baf870a7ab86f500c96',
      tools,
      title: 'Допомога з технічним обладнанням',
      bgColor: 'bg-blue-500',
    },
  ];

  return (
    <section className="flex flex-col items-center mt-24 lg:mt-36 px-6 lg:px-20">
      <h2 className="text-sm lg:text-2xl font-semibold text-blue-500">Наша діяльність</h2>
      <h3 className="mt-2.5 lg:mt-5 text-2xl lg:text-6xl font-bold text-stone-900">Напрямки діяльності</h3>
      <p className="mt-9 lg:mt-6 text-sm lg:text-xl text-center text-zinc-700">
        Ми здійнюємо безперебійну допомогу та волонтерську діяльність ще із самого початку повномасштабного вторгнення.
      </p>
      <div className="flex flex-wrap gap-5 justify-center mt-9 lg:mt-12">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({ imageSrc, title, bgColor }) => (
  <div className="flex flex-col items-center px-14 pt-9 pb-14 mt-9 max-w-full text-base font-bold tracking-normal text-center border border-solid border-black border-opacity-10 rounded-[30px] text-stone-900 w-[262px]">
    <img src={imageSrc} alt={title} className={`object-contain ${bgColor} rounded-full aspect-square h-[100px] w-[100px]`} />
    <div className="mt-7">{title}</div>
  </div>
);