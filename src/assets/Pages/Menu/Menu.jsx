import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import menuImg from "../../Resources/menu/banner3.jpg";
import PopularMenu from "../../Components/PopularMenu/PopularMenu";
const Menu = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mb-8">
        <Cover
          img={menuImg}
          title="Our Menu"
          description="Would you like to try a dish?"
        ></Cover>
      </div>
      <div className="mb-8 max-w-7xl mx-auto">
        <PopularMenu></PopularMenu>
      </div>
      <div className="mb-8">
        <Cover
          img={menuImg}
          title="DESSERTS"
          description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></Cover>
      </div>
      <div className="mb-8 max-w-7xl mx-auto">
        <PopularMenu></PopularMenu>
      </div>
      <div className="mb-8">
        <Cover
          img={menuImg}
          title="PIZZA"
          description="Would you like to try a dish?"
        ></Cover>
      </div>
      <div className="mb-8 max-w-7xl mx-auto">
        <PopularMenu></PopularMenu>
      </div>
      <Footer></Footer>
      <Helmet>
        <title>BistroBoss | Menu</title>
      </Helmet>
    </div>
  );
};

export default Menu;
