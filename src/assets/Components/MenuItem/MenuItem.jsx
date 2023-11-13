
const MenuItem = ({item}) => {
    const {image,name,price,recipe}=item;
    return (
        <div className="flex gap-8">
            <img className="w-32 rounded-full rounded-tl-none" src={image} alt="" />
            <div>
                <h2 className="font-normal text-xl text-black">{name}--------------</h2>
                <p className="font-normal text-base">{recipe}</p>
            </div>
            <p className="font-normal text-xl text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;