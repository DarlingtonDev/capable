const FirstFooter = () => {
  return (
    <footer className="mt-16 w-full border border-gray-100 flex p-6 justify-center mb-1.5 ">
      <div className="w-full lg:w-[80%]">
        <ul className="flex items-center justify-center lg:gap-5 gap-3">
          <li className="font-work-sans capitalize antialiased bg-gray-100 text-gray-700 font-medium border border-gray-200 px-3 py-1.5 rounded-lg lg:rounded-xl text-xs cursor-pointer">
            benefits
          </li>
          <li className="font-work-sans capitalize antialiased bg-gray-100 text-gray-700 font-medium border border-gray-200 px-3 py-1.5 rounded-lg lg:rounded-xl text-xs cursor-pointer">
            Features
          </li>
          <li className="hidden lg:block font-work-sans capitalize antialiased bg-gray-100 text-gray-700 font-medium border border-gray-200 px-3 py-1.5 rounded-xl text-xs cursor-pointer">
            How To Use
          </li>
          <li className="font-work-sans capitalize antialiased bg-gray-100 text-gray-700 font-medium border border-gray-200 px-3 py-1.5 rounded-lg lg:rounded-xl text-xs cursor-pointer">
            Pricing
          </li>
          <li className="font-work-sans capitalize antialiased text-xs cursor-pointer bg-gray-100 text-gray-700 font-medium border border-gray-200 px-3 py-1.5 rounded-lg lg:rounded-xl">
            Testimonials
          </li>
          <li className="hidden lg:hidden font-work-sans capitalize antialiased text-xs cursor-pointer bg-gray-100 text-gray-700 font-medium border border-gray-200 px-3 py-1.5 rounded-xl">
            Download
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FirstFooter;
