import Slider from "react-slick";

import portfolio1 from "../assets/images/portfolio/porfolio1.jpg";
import portfolio2 from "../assets/images/portfolio/porfolio2.jpg";
import portfolio3 from "../assets/images/portfolio/porfolio3.jpg";
import portfolio4 from "../assets/images/portfolio/porfolio3.jpg";
import portfolio5 from "../assets/images/portfolio/porfolio3.jpg";

import "./portfolio.scss";

export const Portfolio = () => {
  const portfolioItems = [
    {
      imageSrc: portfolio1,
      title: "Design Furniture App",
    },
    {
      imageSrc: portfolio2,
      title: "Cloud App",
    },
    {
      imageSrc: portfolio3,
      title: "Design Byte App",
    },
    {
      imageSrc: portfolio4,
      title: "Design 4",
    },
    {
      imageSrc: portfolio5,
      title: "Design 5",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(5, portfolioItems.length),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, portfolioItems.length),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div className="slick-dots-container">
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => <div className="custom-dot" />,
  };

  return (
    <section className="portfolio-section">
      <h2 className="title-primary">Фото звітність</h2>
      <h3 className="title-secondary">Що ми робимо</h3>
      <p className="description">
        Наша діяльність допомогає тисячам бійців. що воюють за нашу свободу
      </p>

      <div className="portfolio-slider">
        <Slider {...settings}>
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

const PortfolioItem = ({ imageSrc }) => (
  <div className="portfolio-item">
    <img src={imageSrc} alt="" className="portfolio-image" />
  </div>
);
