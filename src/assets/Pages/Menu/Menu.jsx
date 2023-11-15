import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import UseMenu from "../../../Hooks/UseMenu/UseMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../../Components/MenuCategory/MenuCategory";

import menuImg from "../../Resources/menu/banner3.jpg";
import saladImg from "../../Resources/menu/salad-bg.jpg";
import soupImg from "../../Resources/menu/soup-bg.jpg";
import pizzaImg from "../../Resources/menu/pizza-bg.jpg";
import dessertImg from "../../Resources/menu/dessert-bg.jpeg";

const Menu = () => {
  const [menu] = UseMenu();

  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Navbar></Navbar>
      {/* -------------------- */}

      {/* -------------------- */}
      <div className="mb-8">
        <Cover
          img={menuImg}
          title="Our Menu"
          description="Would you like to try a dish?"
        ></Cover>
      </div>
      {/* ----------------------- */}

      {/* ----------------------- */}
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"todays offer"}
      ></SectionTitle>
      {/* ------------------ */}
      <MenuCategory items={offered}></MenuCategory>

      <div className="text-center mb-8">
        <button className="btn btn-outline uppercase text-black  border-0 border-b-2">
          order your favorite food
        </button>
      </div>
      {/* ------------------ */}
      <div className="mb-8">
        <Cover
          img={dessertImg}
          title="Dessert"
          description="Would you like to try a dish?"
        ></Cover>
      </div>
      <MenuCategory items={dessert}></MenuCategory>

      <div className="text-center mb-8">
        <button className="btn btn-outline uppercase text-black  border-0 border-b-2">
          order your favorite food
        </button>
      </div>
      {/* ------------------ */}
      {/* ------------------ */}
      <div className="mb-8">
        <Cover
          img={pizzaImg}
          title="pizza"
          description="Would you like to try a dish?"
        ></Cover>
      </div>
      <MenuCategory items={pizza}></MenuCategory>

      <div className="text-center mb-8">
        <button className="btn btn-outline uppercase text-black  border-0 border-b-2">
          order your favorite food
        </button>
      </div>
      {/* ------------------ */}
      {/* ------------------ */}
      <div className="mb-8">
        <Cover
          img={saladImg}
          title="salad"
          description="Would you like to try a dish?"
        ></Cover>
      </div>
      <MenuCategory items={salad}></MenuCategory>

      <div className="text-center mb-8">
        <button className="btn btn-outline uppercase text-black  border-0 border-b-2">
          order your favorite food
        </button>
      </div>
      {/* ------------------ */}
      {/* ------------------ */}
      <div className="mb-8">
        <Cover
          img={soupImg}
          title="soup"
          description="Would you like to try a dish?"
        ></Cover>
      </div>
      <MenuCategory items={soup}></MenuCategory>

      <div className="text-center mb-8">
        <button className="btn btn-outline uppercase text-black  border-0 border-b-2">
          order your favorite food
        </button>
      </div>
      {/* ------------------ */}
      <Footer></Footer>
      {/* ----------------------- */}
      <Helmet>
        <title>BistroBoss | Our Menu</title>
      </Helmet>
    </div>
  );
};

export default Menu;
