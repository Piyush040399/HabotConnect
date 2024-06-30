import image from "../../assets/image 2.png";
import { Button } from "../";

const ExploreSection = () => {
  return (
    <div className="h-[609px] w-full relative">
      <img
        src={image}
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h2 className="text-[34px] md:text-[55px] leading-10 font-bold mb-4 ">
          Are You a Supplier?
        </h2>
        <p className="text-[25px] md:text-[55px] font-normal mb-4">
          Explore Matching Opportunities.
        </p>
        <div className="flex px-2 space-x-2 my-4">
          <input
            type="text"
            placeholder="Search your required service here"
            className="w-full px-4 py-3 rounded lg:w-[400px] md:w-auto text-black"
          />
          <input
            type="text"
            placeholder="Search your desired location here"
            className="w-full px-4 py-2 rounded lg:w-[400px] md:w-auto text-black "
          />
          <Button
            width="117.94px"
            height="54px"
            border="none"
            color="#FFFFFF"
            fontWeight="700"
            fontSize="15.13px"
            name="Search"
            backgroundColor="#00732F"
          />
        </div>
        <p className="mt-4 font-bold text-lg">
          Are you a buyer ?{" "}
          <a href="#" className="font-normal underline ml-1">
            Click here if you are looking to post a requirements
          </a>
        </p>
      </div>
    </div>
  );
};

export default ExploreSection;
