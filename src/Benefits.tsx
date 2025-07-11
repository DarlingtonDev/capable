import {
  Earth,
  LockKeyhole,
  MonitorSmartphone,
  SmileIcon,
  Sparkles,
  StarIcon,
  Users2Icon,
  type LucideIcon,
} from "lucide-react";

const Benefits = () => {
  const benefitArr = [
    {
      icon: Users2Icon,
      title: "Authentic connections",
      desc: "Build genuine relationships with like- <br /> minded individuals",
    },
    {
      icon: Earth,
      title: "Global Reach",
      desc: "Connect with people across 50+ <br /> countries effortlessly",
    },
    {
      icon: Sparkles,
      title: "Personalised Experience",
      desc: "Tailored content and reccomendations <br /> just for you",
    },

    {
      icon: SmileIcon,
      title: "Community Support",
      desc: "Join thriving communities around <br /> your interest",
    },

    {
      icon: MonitorSmartphone,
      title: "Seamless Interaction",
      desc: "Smooth and intuitive user experience <br /> on all devices",
    },
    {
      icon: LockKeyhole,
      title: "Privacy First",
      desc: "Your data is secure and under <br /> your control",
    },
  ];
  const BenefitBox = ({
    icon: Icon,
    title,
    desc,
  }: {
    icon: LucideIcon;
    title: string;
    desc: string;
  }) => {
    return (
      <div className="min-h-20 gap-4  bg-gray-100 rounded-xl border border-gray-200 py-6 flex flex-col items-center w-full lg:w-[32%] justify-center ">
        <div className="w-[11%] bg-primary h-[37px] rounded-[50%] flex justify-center items-center">
          <Icon className="w-4 text-white" />
        </div>

        <div>
          <h4 className="font-work-sans text-sm font-semibold text-center">
            {title}
          </h4>
          <p
            className="text-center text-xs font-work-sans font-medium mt-2 text-gray-900"
            dangerouslySetInnerHTML={{ __html: desc }}
          ></p>
        </div>
      </div>
    );
  };
  return (
    <section className="mt-16 w-full flex justify-center py-4" id="benefits">
      <div className="w-full px-6 lg:w-[80%]">
        <div className="flex justify-center items-center w-full flex-col gap-2">
          <div className="flex gap-1 items-center bg-gray-100 border-gray-200 border px-1 rounded-xl ">
            <StarIcon className="w-3 font-semibold text-gray-900" />
            <p className="font-work-sans font-medium text-xs text-gray-900 ">
              Our Benefits
            </p>
          </div>

          <div>
            <h2 className="font-poppins text-xl lg:text-2xl font-semibold text-center">
              Discover Capable's Benefits
            </h2>
            <p className="mt-0.5 text-center text-xs font-work-sans font-medium">
              Unlock a world of meaningful connections, tailored experiences{" "}
              <br className="hidden lg:block" /> and seamless social interaction
            </p>
          </div>
        </div>

        <div className="flex w-full flex-wrap mt-8 gap-4 ">
          {benefitArr.map((values, index) => (
            <BenefitBox key={index} {...values} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
