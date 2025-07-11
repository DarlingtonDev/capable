const SecondFooter = () => {
  return (
    <div className="py-5 lg:py-3 px-6 items-center flex justify-between">
      <p className="font-work-sans text-xs font-medium text-gray-500">
        Developed by Fortune Obi
      </p>
      <div className="flex gap-3">
        <img
          src="https://img.icons8.com/color/48/linkedin.png"
          alt="LinkedIn"
          className="lg:w-[30px] lg:h-[30px] w-[27px] h-[27px]"
          loading="lazy"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/fortune-obi-278aa3314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
              "_blank"
            )
          }
        />
        <img
          src="https://img.icons8.com/ios-filled/50/000000/twitterx--v1.png"
          alt="X"
          className="lg:w-[30px] lg:h-[30px] w-[27px] h-[27px]"
          loading="lazy"
          onClick={() =>
            window.open("https://x.com/nonso_can_code?s=21", "_blank")
          }
        />
        <img
          src="https://img.icons8.com/color/48/whatsapp.png"
          alt="WhatsApp"
          className="lg:w-[30px] lg:h-[30px] w-[28px] h-[28px] hidden"
          loading="lazy"
        />
      </div>

      <p className="font-work-sans text-xs font-medium text-gray-500 lg:block hidden">
        Privacy Policy
      </p>
    </div>
  );
};

export default SecondFooter;
