import {
  CalendarCheck,
  Funnel,
  Info,
  MonitorSmartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const Advanced = () => {
  const tabsArr = [
    { title: "Followers", percentage: 50 },
    { title: "Non-followers", percentage: 25 },
    { title: "New-followers", percentage: 15.8 },
  ];

  const messageArr = [
    {
      image: "woman.jpeg",
      name: "Jenny Roy",
      message: "I love the new design!",
    },
    {
      image: "man.jpeg",
      name: "John Doe",
      message: "Great job on the project!",
    },
    {
      image: "child.jpeg",
      name: "Mark Smith",
      message: "The new features are fantastic!",
    },
    {
      image: "hairy.jpeg",
      name: "Alice Johnson",
      message: "Will you be adding updates?",
    },
  ];
  const Tabs = ({
    title,
    percentage,
  }: {
    title: string;
    percentage: number;
  }) => {
    return (
      <div className="p-1.5 border border-gray-300 rounded-xl bg-gray-50">
        <p className="font-work-sans text-[11px] font-medium text-gray-900">
          {title}
        </p>

        <div className="flex items-center w-full gap-2">
          <div className="w-[85%] h-1 bg-gray-100 mt-2 border border-gray-300 rounded-2xl">
            <div
              className={`w-[${percentage}%] bg-primary h-1 rounded-2xl`}
            ></div>
          </div>
          <div className="w-[15%] bg-primary/30 flex justify-center items-center rounded-xl px-0.5 py-0.5">
            <p className="font-work-sans text-[11px] font-medium">{`${percentage}%`}</p>
          </div>
        </div>
      </div>
    );
  };

  const Message = ({
    image,
    name,
    message,
  }: {
    image: string;
    name: string;
    message: string;
  }) => {
    return (
      <div className="flex w-full items-center h-12 gap-2">
        <div className="w-[15%] rounded-[50%] h-8">
          <img
            src={image}
            alt=""
            className="w-full object-cover h-full rounded-[50%]"
            loading="lazy"
          />
        </div>

        <div className="font-work-sans">
          <h1 className="text-xs font-medium">{name}</h1>
          <p className="text-[11px] font-medium text-gray-500">{message}</p>
        </div>
      </div>
    );
  };

  const capabilitiesArr = [
    {
      icon: MonitorSmartphone,
      feature: "Seamless cross-plafrom access on all devices",
    },
    {
      icon: Funnel,
      feature: "Advanced search filters to find connections",
    },
    {
      icon: CalendarCheck,
      feature: "Integrated calender for event scheduling",
    },
    {
      icon: Sparkles,
      feature: "Real-time translation for global communication",
    },
  ];
  const Capabilities = ({
    icon: Icon,
    feature,
  }: {
    icon: LucideIcon;
    feature: string;
  }) => {
    return (
      <div className="w-full lg:w-[49%] gap-2 min-h-20 flex lg:min-h-14 p-2.5 border border-gray-200 rounded-2xl bg-gray-100 items-center">
        <div className="w-[15%] lg:w-[18%] h-8 flex justify-center items-center rounded-md bg-primary">
          <Icon className="text-white w-4" />
        </div>
        <div className="w-[72%] px-1.5">
          <p className="font-work-sans text-[11px] font-medium">{feature}</p>
        </div>
      </div>
    );
  };
  return (
    <section className="flex mt-16 justify-center w-full pb-3 px-4 lg:px-0">
      <div className=" w-full lg:w-[80%] flex min-h-86 gap-12 lg:flex-row flex-col">
        <div className="w-full lg:w-1/2 rounded-2xl relative bg-[url('bg.jpg')] bg-[length:20px_20px] bg-repeat px-2 lg:px-5 py-6 min-h-72">
          <div className="absolute bottom-4 p-0.5 bg-white rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] h-fit lg:w-[60%] w-[80%]">
            <div className="w-full h-fit rounded-xl border border-gray-200 px-1.5 pt-2">
              <div className="flex gap-1 items-center border-b border-gray-200">
                <p className="font-work-sans text-[11px] text-gray-900 font-medium">
                  Reach
                </p>
                <Info className="w-3 text-gray-900" />
              </div>

              <div className="mt-2">
                <p className="font-work-sans text-[11px] text-gray-900 font-medium mb-3">
                  Accounts reached
                </p>

                <div className="flex-col gap-1.5 flex h-36 overflow-hidden">
                  {tabsArr.map((value, index) => (
                    <Tabs key={index} {...value} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-[70%] lg:overflow-auto lg:h-fit overflow-hidden h-50 lg:w-[50%] bg-white absolute right-1 lg:right-10 top-2 lg:top-4 fit rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] p-1">
            <div className="w-full h-fit  rounded-xl border border-gray-200 px-1.5 pt-2">
              <p className="font-work-sans text-[11px] text-gray-900 font-medium mb-2">
                Messages
              </p>

              <div className="flex flex-col gap-1 h-full ">
                {messageArr.map((value, index) => (
                  <Message key={index} {...value} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-5 py-6">
          <h2 className="font-poppins text-xl lg:text-2xl font-semibold">
            Capable's Advanced <br /> Capabilities
          </h2>
          <p className="mt-4 text-gray-500 font-work-sans text-xs">
            Explore advanced capabilities designed to elevate your social
            experience and interaction
          </p>

          <div className="mt-10 flex flex-wrap w-full gap-4 lg:gap-1">
            {capabilitiesArr.map((value, index) => (
              <Capabilities key={index} {...value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advanced;
