import { Laugh, QuoteIcon, Star } from "lucide-react";

const Testimonials = () => {
  const testimonialsGroupOne = [
    {
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      name: "James Carter",
      testimonial:
        "Capable helped me connect with people who actually get me. The experience has been amazing.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/38.jpg",
      name: "Emily Parker",
      testimonial:
        "I love how easy it is to navigate Capable. It’s sleek, responsive, and feels truly personal.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/34.jpg",
      name: "Matthew Johnson",
      testimonial:
        "The smart filters and suggestions on Capable are spot-on. It fits seamlessly into my routine.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      name: "Olivia Harris",
      testimonial:
        "Capable changed the way I meet people online. It's clean, fast, and actually enjoyable to use.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      name: "Daniel Miller",
      testimonial:
        "I was skeptical at first, but Capable just works. Real connections, no fluff.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/11.jpg",
      name: "Sophia Mitchell",
      testimonial:
        "The intuitive design and smart features of Capable made it easy to find meaningful connections. It’s my go-to app now.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/58.jpg",
      name: "Logan Smith",
      testimonial:
        "Capable doesn’t waste your time. Simple, direct, and effective — exactly what I needed.",
    },
  ];

  const testimonialsGroupTwo = [
    {
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      name: "Ava Thompson",
      testimonial:
        "The layout is beautiful, and the experience on Capable feels so natural and real.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/13.jpg",
      name: "Ethan Davis",
      testimonial:
        "Capable's suggestions feel personal. I’ve had more genuine chats here than anywhere else.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/56.jpg",
      name: "Grace Wilson",
      testimonial:
        "I’ve tried other apps, but Capable just feels better. No weird energy, just good people.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      name: "Jack Anderson",
      testimonial:
        "Capable is the first app that doesn’t feel like a waste of time. I actually trust it.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/19.jpg",
      name: "Chloe Robinson",
      testimonial:
        "I didn’t think apps like this could be this smooth. Capable proved me wrong.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/39.jpg",
      name: "Benjamin Lee",
      testimonial:
        "Capable is clean, direct, and seriously well-built. It just works.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/7.jpg",
      name: "Ella Martinez",
      testimonial:
        "Capable makes everything feel easy and intentional. Love the design, love the vibe.",
    },
  ];

  const Testimonial = ({
    name,
    image,
    testimonial,
  }: {
    name: string;
    image: string;
    testimonial: string;
  }) => {
    return (
      <div className="w-[250px] lg:w-[250px] flex-shrink-0 min-h-36 rounded-xl bg-gray-200 relative p-4 ">
        <div className="absolute top-2 right-2">
          <QuoteIcon className="w-4" />
        </div>

        <div className="w-full flex border-b border-gray-300 py-2">
          <div className="w-[15%]  h-[33px] ">
            <img src={image} alt="" className="rounded-[50%]" loading="lazy" />
          </div>

          <div className="w-[85%] px-1.5">
            <h4 className="font-work-sans text-xs font-semibold">{name}</h4>
            <div className="flex gap-0.5">
              <Star className="w-3 text-yellow-500" />
              <Star className="w-3 text-yellow-500" />
              <Star className="w-3 text-yellow-500" />
              <Star className="w-3 text-yellow-500" />
              <Star className="w-3 text-yellow-500" />
            </div>
          </div>
        </div>

        <p className="font-work-sans text-xs font-medium text-gray-600 mt-2">
          {testimonial}
        </p>
      </div>
    );
  };
  return (
    <section
      className="mt-16 w-full flex items-center py-4 flex-col"
      id="testimonials"
    >
      <div className="w-[80%]">
        <div className="flex justify-center items-center w-full flex-col gap-2">
          <div className="flex gap-1 items-center bg-gray-100 border-gray-200 border px-1 rounded-xl ">
            <Laugh className="w-3 font-semibold text-gray-900" />
            <p className="font-work-sans font-medium text-xs text-gray-900 ">
              Our Testimonials
            </p>
          </div>

          <div>
            <h2 className="font-poppins text-xl lg:text-2xl font-semibold text-center">
              User Reviews and Feedback
            </h2>
            <p className="mt-1 lg:mt-0.5 text-center text-xs font-work-sans font-medium">
              See how Capable has transformed user social experience through
              <br className="hidden lg:block" /> their own words.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 py-5 w-full relative overflow-hidden">
        <div className="z-10 left-0 absolute bg-[linear-gradient(to_right,white_0%,white_40%,transparent_100%)] h-full w-[10%]"></div>
        <div className="z-10 right-0 absolute bg-[linear-gradient(to_left_,white_0%,_white_40%,_transparent_100%)] h-full w-[20%]"></div>

        <div className="flex flex-nowrap items-center gap-3 animate-rtl w-max">
          {[...testimonialsGroupOne, ...testimonialsGroupOne].map(
            (value, index) => (
              <Testimonial key={index} {...value} />
            )
          )}
        </div>

        <div className="flex flex-nowrap items-center gap-3 mt-4 animate-scroll  w-max">
          {[...testimonialsGroupTwo, ...testimonialsGroupTwo].map(
            (value, index) => (
              <Testimonial key={index} {...value} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
