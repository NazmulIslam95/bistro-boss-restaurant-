import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Cover from "../../Components/Cover/Cover";
import shopImg from "../../Resources/shop/banner2.jpg"
import { Helmet } from "react-helmet-async";

const OurShop = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Cover
        img={shopImg}
        title="Our Shop"
        description="Would you like to try a dish?"
      ></Cover>
      <Footer></Footer>
      <Helmet>
        <title>BistroBoss | Our Shop</title>
      </Helmet>
    </div>
  );
};

export default OurShop;
