import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import Slide1 from "../../../assets/Resources/category/slide1.jpg";
import Slide2 from "../../../assets/Resources/category/slide2.jpg";
import Slide3 from "../../../assets/Resources/category/slide3.jpg";
import Slide4 from "../../../assets/Resources/category/slide4.jpg";
import Slide5 from "../../../assets/Resources/category/slide5.jpg";

import { FreeMode, Pagination } from "swiper/modules";
import SectionTitle from "../SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"order online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper my-20"
      >
        <SwiperSlide>
          <img src={Slide1} />
          <h3 className="uppercase text-4xl font-normal text-white -mt-10 text-center">
            salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} />
          <h3 className="uppercase text-4xl font-normal text-white -mt-10 text-center">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} />
          <h3 className="uppercase text-4xl font-normal text-white -mt-10 text-center">
            soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide4} />
          <h3 className="uppercase text-4xl font-normal text-white -mt-10 text-center">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide5} />
          <h3 className="uppercase text-4xl font-normal text-white -mt-10 text-center">
            salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
