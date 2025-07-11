import { Check, Crown, X } from "lucide-react";

const Pricing = () => {
  const Card = ({
    type,
    amount,
    allActive,
  }: {
    type: string;
    amount: string;
    allActive?: boolean;
  }) => {
    const cardDetailsArr = [
      {
        text: "Create and customize profile",
        active: true,
      },
      {
        text: "Connect with other users",
        active: true,
      },
      {
        text: "Send and receive messages",
        active: false,
      },
      {
        text: "Access to basic features",
        active: true,
      },
      {
        text: "View and share contents",
        active: false,
      },
      {
        text: "Receive notifications and updates",
        active: true,
      },
    ];
    const CardDetails = ({
      text,
      active,
    }: {
      text: string;
      active: boolean;
    }) => {
      return (
        <div className="flex gap-1.5 items-center mt-3">
          {active || allActive ? (
            <Check className="text-green-600 w-4" />
          ) : (
            <X className="text-red-600 w-4" />
          )}

          <p
            className={`${
              active ? "text-black" : "text-gray-500"
            } font-work-sans text-xs font-medium`}
          >
            {text}
          </p>
        </div>
      );
    };
    return (
      <div className="lg:w-[48%] w-[90%] snap-start flex-shrink-0 h-full px-4 py-3 border border-gray-100 rounded-2xl bg-gray-100">
        <h2 className="font-poppins text-xs font-semibold ">{type}</h2>

        <h1 className="mt-1.5 font-work-sans text-3xl font-semibold">
          ${amount} <span className="text-xs text-gray-900">/per month</span>
        </h1>

        <p className="mt-1 font-work-sans font-semibold text-xs text-gray-800">
          Basic access with essential features
        </p>

        <button className="bg-primary text-white mt-5 w-full py-2.5 font-work-sans text-xs font-medium rounded-2xl">
          Get Started
        </button>

        <div className="bg-gray-50 w-full px-2 py-3 rounded-xl mt-4">
          <p className="font-poppins text-xs font-semibold">What's Included</p>

          {cardDetailsArr.map((value, index) => (
            <CardDetails key={index} {...value} />
          ))}
        </div>
      </div>
    );
  };
  return (
    <section
      className="mt-16 w-full flex justify-center py-4 px-8 lg:px-0"
      id="pricing"
    >
      <div className="w-full lg:w-[80%]">
        <div className="flex justify-center items-center w-full flex-col gap-2">
          <div className="flex gap-1 items-center bg-gray-100 border-gray-200 border px-1 rounded-xl ">
            <Crown className="w-3 font-semibold text-gray-900" />
            <p className="font-work-sans font-medium text-xs text-gray-900 ">
              Our Pricing
            </p>
          </div>

          <div>
            <h2 className="font-poppins lg:text-2xl font-semibold text-center text-xl">
              Flexible Pricing Plans
            </h2>
            <p className="lg:mt-0.5 mt-1 text-center text-xs font-work-sans font-medium">
              Choose a plan that suits your needs, with flexible options and{" "}
              <br className="hidden lg:block" /> transparent pricing.
            </p>
          </div>

          <div className=" p-1 flex w-[45%] lg:w-[15%] bg-gray-100 mt-2.5 min-h-8 gap-2 rounded-2xl">
            <div className="w-1/2 flex justify-center items-center bg-white h-full p-1.5 rounded-2xl cursor-pointer">
              {" "}
              <p className="font-work-sans text-xs font-semibold ">Monthly</p>
            </div>
            <div className="w-1/2 flex items-center h-full p-1.5 cursor-pointer">
              <p className="font-work-sans text-xs font-semibold text-gray-900">
                Yearly
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[65%] mt-6 flex gap-5 min-h-96 overflow-x-auto snap-x snap-mandatory ">
            <Card type="Free" amount="0" />
            <Card type="Premium Plan" amount="10" allActive={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
