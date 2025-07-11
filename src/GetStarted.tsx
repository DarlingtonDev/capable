import { Lightbulb } from "lucide-react";
import { memo, useEffect, useMemo, useRef, useState } from "react";

const GetStarted = () => {
  const [scrollIndex, setIndex] = useState(0);
  const container = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const slideWidth = element.offsetWidth;
    let timeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => {
        const scrollLeft = element.scrollLeft;
        const index = Math.round(scrollLeft / slideWidth);
        setIndex(index);
      }, 100);
    };

    element.addEventListener("scroll", handleScroll);
    return () => element.removeEventListener("scroll", handleScroll);
  }, []);
  const stepArr = [
    {
      url: "phoneimage (1).png",
      text: " Sign up and personalize your <br /> profile details",
    },
    {
      url: "phone2.png",
      text: "Explore and send connection requests <br /> to users",
    },
    {
      url: "phone3.png",
      text: "Start chatting and share your <br /> moments",
    },
  ];

  const Step = useMemo(() => {
    return memo(({ url, text }: { url: string; text: string }) => {
      return (
        <div
          className={` pt-4 snap-start w-full flex-shrink-0 lg:w-[30%]  border border-gray-300 bg-gradient-to-b from-gray-100 to-primary/50  lg:border-gray-300 overflow-hidden rounded-lg`}
        >
          <h3
            className="text-center font-work-sans lg:font-medium text-[13px] font-semibold text-gray-900"
            dangerouslySetInnerHTML={{ __html: text }}
          ></h3>

          <div className="w-full flex justify-center mt-2.5 h-[60vh] lg:h-[70vh]">
            <div className="w-[70%] h-full">
              <img
                src={`${url}`}
                alt=""
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      );
    });
  }, []);

  return (
    <section className="mt-16 w-full flex justify-center py-4">
      <div className="w-[80%]">
        <div className="flex justify-center items-center w-full flex-col gap-2">
          <div className="flex gap-1 items-center bg-gray-100 border-gray-200 border px-1 rounded-xl ">
            <Lightbulb className="w-3 font-semibold text-gray-900" />
            <p className="font-work-sans font-medium text-xs text-gray-900 ">
              How to use
            </p>
          </div>

          <div>
            <h2 className="font-poppins text-xl lg:text-2xl font-semibold  text-center ">
              Getting started with Capable
            </h2>
            <p className="mt-1 lg:mt-0.5 text-center text-xs font-work-sans font-medium">
              Follow these simple steps to set up your profile and start
              <br className="lg:block hidden" /> connecting today
            </p>
          </div>
        </div>

        <div
          className=" w-full snap-start gap-3 flex mt-10  h-[24rem] lg:justify-center lg:overflow-hidden overflow-x-auto snap-x snap-mandatory"
          ref={container}
        >
          {stepArr.map((values, index) => (
            <Step key={index} url={values.url} text={values.text} />
          ))}
        </div>
        <div className=" w-full mt-3 min-h-10 flex justify-center items-center lg:hidden gap-2">
          <div
            className={`w-2 border ${
              scrollIndex <= 0 ? "bg-primary" : "bg-transparent"
            } border-primary h-2 rounded-[50%]`}
          ></div>
          <div
            className={`w-2 border ${
              scrollIndex === 1 && scrollIndex < 624
                ? "bg-primary"
                : "bg-transparent"
            } border-primary h-2 rounded-[50%]`}
          ></div>
          <div
            className={`${
              scrollIndex >= 2 ? "bg-primary" : "bg-transparent"
            } w-2 border border-primary h-2 rounded-[50%]`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default memo(GetStarted);
