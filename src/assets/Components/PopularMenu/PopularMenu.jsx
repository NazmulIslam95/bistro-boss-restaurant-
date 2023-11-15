import SectionTitle from "./../SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";
import UseMenu from "../../../Hooks/UseMenu/UseMenu";
const PopularMenu = () => {
  const [menu] = UseMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="">
      <SectionTitle
        subHeading="Check it out"
        heading="FROM OUR MENU"
      ></SectionTitle>
      {/* ------------- */}
      <div className="grid grid-cols-2 gap-4 my-8">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      {/* -------------- */}
      <div className="text-center">
        <button className="btn btn-outline uppercase text-black  border-0 border-b-2">
          View Full Menu
        </button>
      </div>
      {/* --------------- */}
    </section>
  );
};

export default PopularMenu;
