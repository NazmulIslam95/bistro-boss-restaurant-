import SectionTitle from "../SectionTitle/SectionTitle";
import featuredImg from "../../../assets/Resources/home/featured.jpg"
import './FeaturedItem.css'

const FeaturedItem = () => {
  return (
    <div className="featuredSec ">
      <section className="p-32 bg-black bg-opacity-70">
      <SectionTitle 
        subHeading="Check it out"
        heading="from our menu"
      ></SectionTitle>
           <div className="flex gap-8 my-10 text-white">
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className="space-y-4 my-auto">
                <h3>Aug 30, 2023</h3>
                <h1 className="uppercase">where can i get some?</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima beatae ex tenetur veritatis saepe consectetur, laboriosam animi nobis facere. Corporis iusto maiores possimus nisi asperiores? Iusto ad voluptates reiciendis repellendus, officiis quas tempore exercitationem eaque consequuntur excepturi, veritatis optio velit.</p>
                <button className="btn btn-outline uppercase text-white border-0 border-b-2">Read More</button>
            </div>
           </div>
      </section>
    </div>
  );
};

export default FeaturedItem;
