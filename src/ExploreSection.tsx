import {
  Bell,
  CheckCircle2Icon,
  EllipsisVertical,
  Figma,
  Framer,
  Gitlab,
  Slack,
  Smile,
  Trello,
  UsersRound,
  Youtube,
  type LucideIcon,
} from "lucide-react";

const ExploreSection = () => {
  const Features = ({
    icon: Icon,
    statement,
  }: {
    icon: LucideIcon;
    statement: string;
  }) => {
    return (
      <div className=" w-fit px-2 flex border border-gray-200 gap-1 items-center py-2 rounded-3xl bg-gray-50">
        <Icon className="w-4" />
        <p className="text-[11px] font-semibold font-poppins">{statement}</p>
      </div>
    );
  };
  const featuresArr = [
    {
      icon: UsersRound,
      statement: "Smart matching algorithm for tailored connections",
    },
    {
      icon: Smile,
      statement: "Customizable profiles for personal expression",
    },
    { icon: Bell, statement: "Real-time notification for instant update" },
  ];
  const Faces = () => {
    return (
      <div className="w-[60%] lg:w-[50%] min-h-12 px-1 py-1 rounded-4xl bg-white border border-gray-200 ">
        <div className="w-full border border-gray-200 h-full rounded-3xl flex gap-1 relative overflow-hidden">
          <div className="pointer-events-none absolute right-0 top-0 bg-white/70 w-[80%] h-full z-10"></div>
          <div className="w-1/5 h-full">
            <img
              src="man.jpeg"
              alt=""
              className=" w-full h-full rounded-[50%] border-[3px] border-primary"
              loading="lazy"
            />
          </div>
          <div className="w-1/5">
            <img
              src="child.jpeg"
              alt=""
              className="w-full h-full rounded-[50%]"
              loading="lazy"
            />
          </div>
          <div className="w-1/5">
            <img
              src="woman.jpeg"
              alt=""
              className="w-full h-full rounded-[50%]"
              loading="lazy"
            />
          </div>
          <div className="w-1/5">
            <img
              src="boy.jpeg"
              alt=""
              className="w-full h-full rounded-[50%]"
              loading="lazy"
            />
          </div>
          <div className="w-1/5">
            <img
              src="hairy.jpeg"
              alt=""
              className="w-full h-full rounded-[50%]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  };

  const Phone = () => {
    return (
      <div className="mt-6 h-dvh w-[70%] lg:w-[65%] bg-white rounded-tl-4xl rounded-tr-4xl p-0.5 border border-gray-200">
        <div className="h-dvh w-full bg-white rounded-tl-4xl rounded-tr-4xl border border-gray-200">
          <div className="w-full h-[10%] border-b border-gray-200 flex p-5">
            <div className="w-[70%] flex items-center gap-1">
              <div className="w-[25%] rounded-[50%] h-10">
                <img
                  src="man.jpeg"
                  alt=""
                  className="w-full h-full rounded-[50%] object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="flex gap-1 items-center">
                  <h1 className="font-semibold text-[11px] font-poppins">
                    Jenny Roy
                  </h1>{" "}
                  <span>
                    <CheckCircle2Icon className="text-blue-500 w-4" />
                  </span>
                </div>

                <p className="text-[10px] font-poppins">@jenny65</p>
              </div>
            </div>

            <div className="flex w-[30%] justify-end">
              <EllipsisVertical className="w-4" />
            </div>
          </div>
          <div className="w-full h-dvh mt-3 px-3">
            <div className="w-full rounded-3xl border-b border-gray-200 h-dvh bg-[url('hiking.webp')] bg-top bg-contain relative"></div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="py-4">
      <div className="w-full flex justify-center lg:mt-6 mt-3">
        <p className="font-work-sans font-semibold text-xs">
          Trusted by 1000+ businesses across the world
        </p>
      </div>

      <div className="w-full flex justify-center mt-3">
        <div className="lg:w-[45%] w-[100%] min-h-16 relative flex items-center px-3 py-2 overflow-hidden justify-between gap-3 lg:gap-0">
          <div className="absolute pointer-events-none bg-gradient-to-r from-white to-transparent left-0  w-20 h-full z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full pointer-events-none bg-gradient-to-l from-white to-transparent z-10"></div>
          <div className="flex items-center gap-0.5 w-[16.6]">
            <Trello className="w-4 lg:w-6" />
            <p className="font-semibold text-xs font-work-sans">Trello</p>
          </div>
          <div className="flex items-center gap-0.5 w-[16.6]">
            <Framer className="w-4 lg:w-6" />
            <p className="font-semibold text-xs font-work-sans">Framer</p>
          </div>
          <div className="flex items-center gap-0.5 w-[16.6]">
            <Slack className="w-4 lg:w-6" />
            <p className="font-semibold text-xs font-work-sans">Slack</p>
          </div>
          <div className="flex items-center gap-0.5 w-[16.6]">
            <Gitlab className="w-4 lg:w-6" />
            <p className="font-semibold text-xs font-work-sans">Gitlab</p>
          </div>
          <div className="flex items-center gap-0.5 w-[16.6]">
            <Figma className="w-4 lg:w-6" />
            <p className="font-semibold text-xs font-work-sans">Figma</p>
          </div>
          <div className="flex items-center gap-0.5 w-[16.6]">
            <Youtube className="w-4 lg:w-6" />
            <p className="font-semibold text-xs font-work-sans">Youtube</p>
          </div>
        </div>
      </div>

      <div className="w-full mt-16 flex justify-center ">
        <div className="w-[100%] lg:w-[78%]  flex items-center justify-between lg:flex-row flex-col-reverse lg:px-0 px-5 lg:gap-0 gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="font-poppins font-semibold text-xl lg:text-2xl">
              Explore Capable's <br /> Key Features
            </h2>
            <div className="mt-5 flex flex-col gap-2.5">
              {featuresArr.map((value, index) => (
                <Features key={index} {...value} />
              ))}
            </div>

            <div className="flex mt-6 lg:mt-4 w-full gap-3">
              <div className="w-1/3 lg:w-1/4 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-gray-300 flex gap-1 px-1.5 py-2 lg:py-1 rounded-3xl bg-gray-50 items-center">
                <div className="w-[15%] lg:w-[20%]">
                  <img
                    src="OIP-removebg-preview (1).png"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="font-work-sans">
                  <p className="font-semibold text-[11px] text-gray-700 hidden lg:block">
                    Get it on
                  </p>
                  <h2 className="text-xs font-semibold text-gray-800">
                    Google Play
                  </h2>
                </div>
              </div>

              <div className="w-[30%] shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-gray-300 flex gap-1 px-1.5 py-1 rounded-3xl bg-gray-50 items-center">
                <div className="w-[18%]">
                  <img src="OIP-removebg-preview.png" loading="lazy" alt="" />
                </div>
                <div className="font-work-sans">
                  <p className="font-semibold text-[11px] text-gray-700 hidden lg:block">
                    Download on the
                  </p>
                  <h2 className="text-xs font-semibold text-gray-800">
                    App Store
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[40%] w-[100%] overflow-hidden rounded-xl flex flex-col items-center border-gray-200 bg-gray-100 border h-80 pt-6">
            <Faces />
            <Phone />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
