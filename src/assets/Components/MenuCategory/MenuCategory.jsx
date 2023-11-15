import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 gap-4 my-8">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
