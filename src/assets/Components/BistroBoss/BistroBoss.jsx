import chef from "../../../assets/Resources/home/chef-service.jpg"
const BistroBoss = () => {
    return (
        <div className="relative my-16">
            <img src={chef} alt="" />
            <div className="absolute top-14 right-16 left-4 text-center bg-white p-24 w-4/5 mx-auto ">
                <h1 className="text-5xl font-normal text-[#151515] mb-4 uppercase">Bistro Boss</h1>
                <p className="text-[#151515] text-base font-normal ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default BistroBoss;