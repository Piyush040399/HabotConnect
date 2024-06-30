import { image1, image2, image3, image4, image5, image6 } from "../";

const Works = () => {
  const workData = [
    {
      id: 1,
      icon: image1,
      heading: "Select Your Role and Sign UP",
      bg: "#E8FBFF",
    },

    {
      id: 2,
      icon: image2,
      heading: "Buyers Post Your Requirements",
    },
    {
      id: 3,
      icon: image3,
      heading: " Review, Select, and Contact the Best Suppliers",
      bg: "#E8FBFF",
    },
    {
      id: 4,
      icon: image4,
      heading:
        " Suppliers Complete your profile and get notified for opportunities",
    },
    {
      id: 5,
      icon: image5,
      heading: "Contact to Buyers and Share your Quote for the service",
      bg: "#E8FBFF",
    },
    {
      id: 6,
      icon: image6,
      heading:
        "Both the Parties can Connect and Make Business Leave a Feedback",
    },
  ];

  return (
    <div>
      <div className="md:w-[839px] mx-auto text-center my-16 pt-12 px-2">
        <p className=" font-bold text-[37.34px] mb-5">How it works?</p>
        <span className=" font-normal text-[17.16px]   ">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback.
        </span>
      </div>
      <div className=" h-auto w-auto lg:h-[508px] lg:w-[1200px] grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto mb-48">
        {workData.map((item) => (
          <div
            key={item.id}
            className={`md:w-[400px] h-[254px] bg-[${item?.bg}] flex flex-col justify-center items-center gap-10`}
          >
            <img
              src={item.icon}
              alt="icon"
              className="w-[74.35px] h-[74.35px] "
            />
            <p
              className={`font-medium text-xl  ${
                item.id == 1 ? "w-[206px]" : "w-[270px]"
              } h-[53px] text-center`}
            >
              {item.heading}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
