import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/free1.jpg";
import ImageTwo from "../../images/free3.jpg";
import ImageThree from "../../images/cod2.jpg";
import ImageFour from "../../images/cod1.jpg";
import ImageFive from "../../images/cod3.jpg";
import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "Ecommerce",
    image: ImageOne,
    link: "",
  },
  {
    id: 3,
    name: "Notes App",
    image: ImageTwo,
    link: "",
  },
  {
    id: 2,
    name: "Supplier Design",
    image: ImageThree,
    link: "",
  },
  {
    id: 2,
    name: "Todo App",
    image: ImageFour,
    link: "",
  },
  {
    id: 3,
    name: "Shopping Cart Design",
    image: ImageFive,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];
const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);

const [hoveredValue,setHoveredValue] = useState(null)

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

function handleHover(index){
  setHoveredValue(index)
}



  const filterItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filterItems.map((item,index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={()=>handleHover(index)}
              onMouseLeave={()=>handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} alt="dummy data" />
                </a>
              </div>
              <div className="overlay">
                {
                  index === hoveredValue && (
                    <div>
                      <p>{item.name}</p>
                      <button>Visit</button>
                    </div>
                  )
                }

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
