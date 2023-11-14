import { Helmet } from "react-helmet-async";
import Banner from "../../../Components/Banner/Banner";
import BistroBoss from "../../../Components/BistroBoss/BistroBoss";
import Callus from "../../../Components/CallUs/Callus";
import Category from "../../../Components/Category/Category";
import ChefRecommends from "../../../Components/ChefRecommends/ChefRecommends";
import FeaturedItem from "../../../Components/FeaturedItem/FeaturedItem";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import PopularMenu from "../../../Components/PopularMenu/PopularMenu";
import Testimonials from "../../../Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <Category></Category>
        <BistroBoss></BistroBoss>
        <PopularMenu></PopularMenu>
        <Callus></Callus>
        <ChefRecommends></ChefRecommends>
      </div>
      <FeaturedItem></FeaturedItem>
      <div className="max-w-7xl mx-auto  my-24">
        <Testimonials></Testimonials>
      </div>
      <Footer></Footer>
      <Helmet>
        <title>BistroBoss | Home</title>
      </Helmet>
    </div>
  );
};

export default Home;
