import { Parallax } from "react-parallax";

const Cover = ({ img, title, description }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
    >
      <div className="hero min-h-[300px]">
        <div className="hero-content text-center text-neutral-content">
          <div className="py-20 px-32 mt-40 mx-auto max-w-3xl bg-black bg-opacity-50">
            <h1 className="text-5xl my-4 font-bold text-white font-serif uppercase">
              {title}
            </h1>
            <p className="font-serif text-white">{description}</p>
          </div>
        </div>
      </div>
      <div style={{ height: "200px" }} />
    </Parallax>
  );
};

export default Cover;
