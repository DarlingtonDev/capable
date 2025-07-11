import { ChevronRight, Heart, MessageSquareMore, ThumbsUp } from "lucide-react";
import Header from "./Header";
import { useEffect, useRef } from "react";
import { Myobserver } from "./utils/observer";

const HeroSection = () => {
  const herosec = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const current = herosec.current;
    if (current) {
      Myobserver.observe(current);
    }
  }, []);
  const Post = () => {
    return (
      <div className="hidden lg:flex post shadow-[0_4px_16px_rgba(0,0,0,0.08)] px-0.5 lg:px-2 py-2 w-full border items-center gap-4 border-gray-200 bg-white/60 rounded-xl -translate-x-8 translate-y-1.5 opacity-0 transition-all ease-out duration-700">
        <div className="w-[15%] h-full gap-3 flex flex-col ">
          <img src="boy.jpeg" alt="" className="w-full rounded-[50%]" />
          <div className="w-full flex items-center gap-1 mt-2">
            <ThumbsUp className="w-6 h-6" />
            <p className="font-work-sans text-xs font-semibold">Like</p>
          </div>
        </div>

        <div className="w-[75%] flex h-full gap-0.5 flex-col ">
          <h2 className="font-work-sans font-bold text-xs text-gray-900">
            Kurniawan
          </h2>
          <p className="font-poppins text-[10px] text-gray-900 font-semibold">
            I like the overall vibe! How do you
            <br /> create that arrow on the all design?
          </p>
          <div className="w-full flex items-center gap-1 mt-2">
            <MessageSquareMore className="w-4 h-4" />
            <p className="font-work-sans text-xs font-semibold ">comment</p>
          </div>
        </div>
      </div>
    );
  };
  const detailsArr = [
    { heading: "58", description: "posts" },
    { heading: "486", description: "followers" },
    { heading: "397", description: "following" },
  ];
  const Details = ({
    heading,
    description,
  }: {
    heading: string;
    description: string;
  }) => {
    return (
      <div className="w-1/3 flex flex-col items-center justify-between ">
        <h2 className="font-work-sans text-xs font-semibold">{heading}</h2>
        <p className="font-work-sans text-xs">{description}</p>
      </div>
    );
  };
  return (
    <section
      className="lg:rounded-4xl w-full h-svh  relative overflow-hidden"
      ref={herosec}
    >
      <div className="absolute w-full h-full bg-[linear-gradient(to_bottom,_rgba(255,255,255,0.5)_0%,_rgba(255,255,255,0.5)_65%,_rgba(95,43,140,0.4)_100%)] z-10 pointer-events-none"></div>
      <Header />
      <div className="hero0 transition-all ease-out duration-1000 delay-100 opacity-0 -translate-y-1.5 w-full flex justify-center mt-5 relative z-30">
        <div className="w-fit min-h-5 rounded-3xl border border-white bg-white px-0.5 py-0.5 shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
          <div className="w-full min-h-5 px-3 py-1 rounded-3xl bg-gray-100 flex gap-1.5 items-center">
            <p className="bg-primary text-white px-3 pt-0.5 rounded-xl font-work-sans text-[11px] antialiased font-medium">
              New
            </p>
            <p className=" font-work-sans text-[11px] antialiased font-medium">
              Build your connections now
            </p>
            <ChevronRight className="w-3 h-3" />
          </div>
        </div>
      </div>

      <div className="hero1 transition-all ease-out duration-1000 delay-100 opacity-0 -translate-y-1.5 flex w-full mt-4 z-30 relative flex-col items-center">
        <h1 className="capitalize text-center text-2xl lg:text-3xl font-poppins font-semibold">
          empower your social <br /> connections with capable
        </h1>
        <p className="text-center mt-4 text-gray-500 font-work-sans text-xs">
          Join Capable to build authentic connections <br /> and share your
          passion effortlessly
        </p>
        <button className="cursor-pointer bg-primary mt-4 font-work-sans text-white text-xs font-medium px-2 py-1.5 rounded-xl">
          Download App
        </button>
      </div>

      <div className="flex w-full px-3 lg:px-12 relative z-30 mt-12 lg:mt-10 items-start">
        <div className="w-1/5 min-h-40 -rotate-12 translate-x-6 hidden lg:block">
          <img src="phoneimage (1).png" alt="" />
        </div>

        <div className="flex flex-col absolute lg:static justify-between mt-12 gap-36 lg:gap-24 w-[60%] lg:w-1/5 z-40">
          <div className="liked  translate-y-1.5 opacity-0 transition-all ease-out duration-700 delay-300 w-1/2 lg:self-end bg-white/60 flex justify-between border border-gray-200 rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
            <div className="w-[65%] flex px-1.5 py-1.5 ">
              <div className="w-1/3">
                <img
                  src="man.jpeg"
                  alt=""
                  className="rounded-[50%] w-full h-full"
                />
              </div>
              <div className="w-1/3">
                <img
                  src="boy.jpeg"
                  alt=""
                  className="rounded-[50%] -translate-x-2 w-full h-full"
                />
              </div>
              <div className="w-1/3">
                <img
                  src="child.jpeg"
                  alt=""
                  className="rounded-[50%] -translate-x-4 w-full h-full"
                />
              </div>
            </div>

            <div className="flex items-center gap-0.5 px-2 ">
              <Heart className="w-4 h-4 text-primary font-black" />
              <p className="font-work-sans text-xs font-semibold">Liked</p>
            </div>
          </div>

          <div className="w-full border followers translate-y-1.5 opacity-0 transition-all ease-out duration-700 delay-500 border-gray-200 flex items-center justify-between  py-1.5 rounded-2xl bg-white/60 shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
            {detailsArr.map((items, index) => (
              <Details key={index} {...items} />
            ))}
          </div>
        </div>

        <div className="w-[65%] lg:w-1/5 h-[80vh] lg:-translate-x-5 lg:min-h-40 absolute lg:static left-1/2 -translate-x-1/2">
          <img src="phone3.png" alt="" className="" />
        </div>

        <div className="flex flex-col justify-between mt-10 gap-24 w-[55%]  lg:w-[25%] z-40 absolute right-2 top-28 lg:static">
          <div className="translate-y-1.5 opacity-0 transition-all ease-out duration-700 delay-700 profile flex gap-1 justify-between items-center lg:w-[80%] w-full shadow-[0_4px_16px_rgba(0,0,0,0.08)] rounded-xl px-1 py-1.5 lg:-translate-x-14 font-work-sans text-xs bg-white/60 border border-gray-200">
            <button className="w-1/2 py-1 bg-white font-medium rounded-xl border border-gray-200">
              Edit Profile
            </button>
            <button className="w-[20%] py-1 bg-white font-medium rounded-xl border border-gray-200">
              Ads
            </button>
            <button className="w-[30%] py-1 bg-primary text-white font-medium rounded-xl border border-gray-200">
              Insight
            </button>
          </div>

          <Post />
        </div>

        <div className="w-1/5 min-h-40 rotate-12 -translate-x-10 lg:block hidden">
          <img src="phone2.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
