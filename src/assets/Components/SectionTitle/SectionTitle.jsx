
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center mx-auto w-4/12">
            <p className="text-[#D99904] italic text-xl font-normal">---{subHeading}---</p>
            <h1 className="text-[#151515] text-4xl font-normal border-y-4 py-4 my-4 uppercase">{heading}</h1>
        </div>
    );
};

export default SectionTitle;