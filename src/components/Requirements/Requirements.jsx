import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, YoutubeEmbed } from "../";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Requirements = () => {
  const [toggle, setToggle] = useState(1);

  const handleToggle = (id) => {
    setToggle(id);
  };

  return (
    <div className="w-full mt-12 md:mt-5">
      <div className="w-auto h-auto py-6 md:h-[623px] flex flex-col lg:flex-row md:w-4/5 bg-[#072F57] mx-auto items-center justify-between">
        <div className="w-full md:w-1/2 p-5">
          <div className="relative pb-[56.25%] h-0 overflow-hidden">
            <YoutubeEmbed embedId="IZLp-TZyDkQ" />
          </div>
        </div>
        <div className="flex-1 h-auto p-5 lg:mb-40">
          <div className="flex justify-start items-center">
            <li
              onClick={() => handleToggle(1)}
              className={`font-bold text-xl md:text-[26px] list-none ml-16 md:ml-24 text-center md:w-[200px] border-b-4 ${
                toggle === 1
                  ? "border-b-[#EB7150] text-[#EB7150]"
                  : "border-b-transparent text-[#FFFFFF]"
              } cursor-pointer`}
            >
              Buyer
            </li>
            <li
              onClick={() => handleToggle(2)}
              className={`font-bold text-xl md:text-[26px] list-none ml-24 md:ml-36 text-center md:w-[160px] border-b-4 ${
                toggle === 2
                  ? "border-b-[#EB7150] text-[#EB7150]"
                  : "border-b-transparent text-[#FFFFFF]"
              } cursor-pointer`}
            >
              Supplier
            </li>
          </div>
          <div className="mt-14 ml-10 md:ml-20">
            {toggle === 1 && (
              <ul className="list-none font-medium pr-4 md:text-[18.75px] text-[#FFFFFF]">
                <li className="mt-3">
                  <span className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#fff] w-[18px] bg-green-600 rounded-full mr-2"
                    />
                    Post your requirements.
                  </span>
                </li>
                <li className="mt-4">
                  <span className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#fff] w-[18px] bg-green-600 rounded-full mr-2"
                    />
                    Sit back for multiple suppliers to contact you.
                  </span>
                </li>
                <li className="mt-3 xl:mt-0">
                  <span className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#fff] w-[18px] bg-green-600 rounded-full mr-2 mb-6 xl:mt-6 "
                    />
                    Choose among the suppliers based on the ratings and reviews.
                  </span>
                </li>
              </ul>
            )}
            {toggle === 2 && (
              <ul className="list-none font-medium pr-4 md:text-[18.75px] text-[#FFFFFF]">
                <li className="mt-3">
                  <span className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#fff] w-[18px] bg-green-600 rounded-full mr-2"
                    />
                    Complete your profile and get verified.
                  </span>
                </li>
                <li className="mt-4">
                  <span className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#fff] w-[18px] bg-green-600 rounded-full mr-2"
                    />
                    Select service tags for relevant opportunities.
                  </span>
                </li>
                <li className="mt-3 xl:mt-0">
                  <span className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#fff] w-[18px] bg-green-600 rounded-full mr-2 mb-6 xl:mt-6 "
                    />
                    Reach out to buyers and expand your business.
                  </span>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="h-[254px] mt-32 w-auto bg-[#E8FBFF] flex flex-col md:flex-row items-center justify-around">
        <p className="text-[37.34px] font-semibold">
          Let Suppliers{" "}
          <span className="border-b-4 border-b-[#EB7150]">Find You</span>
        </p>
        <Button
          width="216px"
          height="54px"
          border="none"
          color="#FFFFFF"
          fontWeight="700"
          fontSize="15px"
          backgroundColor="#EB7150"
          name="Get Verified"
        />
      </div>
    </div>
  );
};

export default Requirements;
