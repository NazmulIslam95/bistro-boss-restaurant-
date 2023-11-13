import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const ChefRecommends = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("recommends.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <section>
      <SectionTitle
        subHeading="should try"
        heading="Chef Recommends"
      ></SectionTitle>
      <div className="grid grid-cols-3 gap-4 my-12">
        {cards.map((card) => (
          <div key={card._id}>
            <div className=" w-fit bg-[#F3F3F3] text-center rounded-none ">
              <figure>
                <img className="w-full" src={card.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="text-[#151515] text-2xl font-semibold ">{card.name}</h2>
                <p className="text-base text-[#151515] font-normal">{card.ingredients}</p>
                <div className="card-actions justify-center">
                  <button className="btn btn-outline text-[#BB8506] border-0 border-b-2">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChefRecommends;
