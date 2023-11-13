import { useEffect, useState } from "react";
import SectionTitle from "./../SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";
const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section>
      <SectionTitle
        subHeading="Check it out"
        heading="FROM OUR MENU"
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-4 my-8">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline uppercase text-black  border-0 border-b-2">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
