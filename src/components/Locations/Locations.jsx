import { Button } from "../";
import icon from "../../assets/arrow.png";

const Locations = () => {
  const data = [
    "Abu Dhabi",
    "Dubai",
    "Sharjah & Ajman",
    "Fujairah",
    "Ras Al Khaimah",
    "Umm Al Quwain",
  ];

  return (
    <div className="flex flex-col h-auto md:h-auto md:flex-col lg:flex-row md:justify-between md:w-4/5 mx-auto items-center lg:h-[450px]">
      <div className="w-[300px] mb-8 md:w-[32.25rem]">
        <p className="font-bold text-[37.34px] py-5 ">
          Ready to dive into <span className="text-[#271555]"> HABOT?</span>
        </p>
        <span className=" text-[#000000] font-light text-[17.16px]">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </span>
        <Button
          width="317px"
          height="54px"
          border="none"
          color="#FFFFFF"
          fontWeight="700"
          fontSize="18px"
          name="Sign up Today !"
          backgroundColor="#00732F"
          className="mt-8 flex items-center justify-between pl-20 "
          icon={icon}
          paddingRight="12px"
        />
      </div>
      <div className=" grid md:grid-cols-2 gap-5 ">
        {data.map((item, i) => (
          <Button
            key={i}
            width="260px"
            height="65px"
            border="1px solid #E7760D "
            // color="#3E3E3E"
            fontWeight="500"
            fontSize="18.75px"
            className=" hover:bg-[#E7760D] hover:text-[#FFFFFF] text-[#3E3E3E] flex items-center justify-between pl-14 "
            name={item}
            icon={icon}
            paddingRight="10px"
          />
        ))}
      </div>
    </div>
  );
};

export default Locations;
