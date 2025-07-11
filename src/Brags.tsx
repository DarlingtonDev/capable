const Brags = () => {
  const proofArray = [
    {
      title: "500k+",
      desc: "Shared moments and stories <br /> every month",
    },
    {
      title: "200k+",
      desc: "Communities thriving across <br /> diverse interests",
    },
    {
      title: "50+",
      desc: "Countries where Capable is <br /> growing strong",
    },
  ];
  const Proof = ({ title, desc }: { title: string; desc: string }) => {
    return (
      <div className="min-h-20 gap-4 bg-gray-100 rounded-xl border border-gray-200 py-6 flex flex-col items-center w-full lg:w-[31%] justify-center">
        <h2 className="font-work-sans font-bold text-gray-900 text-xl">
          {title}
        </h2>
        <p
          className="text-center font-work-sans text-gray-900 font-medium text-xs"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      </div>
    );
  };
  return (
    <section className="w-full flex justify-center mt-16 py-6">
      <div className="w-full lg:px-0 px-6 lg:w-[80%]">
        <h2 className="lg:text-center font-poppins font-semibold text-xl lg:text-2xl">
          Empowering authentic connections <br className="hidden lg:block" />{" "}
          for a vibrant social experience
        </h2>

        <div className="flex w-full flex-wrap gap-3 lg:items-center mt-7 lg:mt-4 flex-col lg:flex-row">
          {proofArray.map((value, index) => (
            <Proof key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brags;
