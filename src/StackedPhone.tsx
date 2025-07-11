const StackedPhone = () => {
  return (
    <section className="w-full mt-20 flex items-center flex-col pb-4 ">
      <div className="  w-[90%] lg:w-[35%] overflow-hidden h-72 lg:h-96 relative flex justify-center p-4">
        <div className="z-40 absolute bottom-0 w-full h-56 bg-gradient-to-t from-white to-transparent"></div>

        <div className="z-20 w-[60%] p-8 h-[100vh]  absolute -rotate-12 lg:-translate-x-12 -translate-x-8">
          <div className="w-full h-full">
            <img src="phone2.png" alt="" className="w-full" loading="lazy" />
          </div>
        </div>

        <div className="z-10 w-[60%] p-8 h-[100vh]  absolute rotate-12 lg:translate-x-12 translate-x-10">
          <div className="w-full h-full">
            <img src="phone2.png" alt="" className="w-full" loading="lazy" />
          </div>
        </div>

        <div className="z-30 w-[50%] h-[100vh] absolute">
          <img src="phoneimage (1).png" alt="" loading="lazy" />
        </div>
      </div>

      <h2 className="mt-3 text-center text-xl lg;text-2xl font-poppins font-semibold">
        Download Capable and <br /> Connect Today
      </h2>
      <p className="mt-2 text-center font-work-sans text-gray-600 font-medium text-xs lg:text-[13px]">
        Download Capable now to start connecting with like-minded people and
        enjoy a <br className="hidden lg:block" /> seamless social experience
      </p>

      <div className="flex mt-6 lg:mt-4 w-[65%] lg:w-[20%] gap-3">
        <div className="w-1/2 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-gray-300 flex gap-1 px-1.5 py-1 rounded-3xl bg-gray-50 items-center">
          <div className="w-[20%]">
            <img src="OIP-removebg-preview (1).png" loading="lazy" alt="" />
          </div>
          <div className="font-work-sans">
            {/* <p className="font-semibold text-[11px] text-gray-700">Get it on</p> */}
            <h2 className="text-xs font-semibold text-gray-800">Google Play</h2>
          </div>
        </div>

        <div className="w-1/2 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-gray-300 flex gap-1 px-1.5 py-1 rounded-3xl bg-gray-50 items-center">
          <div className="w-[20%]">
            <img src="OIP-removebg-preview.png" loading="lazy" alt="" />
          </div>
          <div className="font-work-sans">
            {/* <p className="font-semibold text-[11px] text-gray-700">
              Download on the
            </p> */}
            <h2 className="text-xs font-semibold text-gray-800">App Store</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackedPhone;
