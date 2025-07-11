import { Menu, X } from "lucide-react";
import { ScrollTo } from "./utils/scroll";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);
  function scrollHelper(element: HTMLElement | null) {
    if (!element) return;
    setOpen(false);
    ScrollTo(element);
  }
  return (
    <header className="w-full h-14 flex relative justify-center lg:items-center lg:px-40 px-5 lg:py-2 mt-2  z-40">
      <div
        className={`${
          open ? "h-50 bg-white/60 backdrop-blur-sm" : "h-0"
        } w-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all ease-in duration-200 h-12 border border-gray-100 rounded-4xl lg:justify-between lg:items-center px-4 py-3 lg:py-3`}
      >
        <div className="w-full justify-between items-center flex lg:h-full">
          <div className="flex lg:w-[10%] w-[50%]  items-center h-full gap-1">
            <div className="lg:hidden w-[12%] h-5">
              <img
                src="favicon.png"
                alt="logo"
                className="h-full object-contain"
              />
            </div>
            <div></div>
            <img
              src="favicon.png"
              alt="logo"
              className="h-full object-contain hidden lg:block"
            />
            <h2 className="capitalize font-semibold lg:font-semibold text-sm  lg:text-xs antialiased font-poppins">
              capable
            </h2>
          </div>
          <nav className="lg:w-[50%] hidden lg:block">
            <ul className="flex justify-around items-center">
              <li
                className="font-work-sans capitalize antialiased font-medium text-xs cursor-pointer"
                onClick={() => ScrollTo(document.getElementById("benefits"))}
              >
                benefits
              </li>
              <li
                className="font-work-sans capitalize antialiased font-medium text-xs cursor-pointer"
                onClick={() => ScrollTo(document.getElementById("pricing"))}
              >
                pricing
              </li>
              <li
                className="font-work-sans capitalize antialiased font-medium text-xs cursor-pointer"
                onClick={() =>
                  ScrollTo(document.getElementById("testimonials"))
                }
              >
                testimonials
              </li>
            </ul>
          </nav>

          <button className="hidden lg:block font-work-sans font-medium capitalize antialiased text-xs cursor-pointer bg-primary text-white px-2 py-1 rounded-4xl hover:bg-primary/80 transition-all duration-300">
            get template
          </button>

          {open ? (
            <motion.div
              initial={{
                scale: 1,
                rotate: "0deg",
              }}
              animate={{ scale: 1, rotate: "180deg" }}
              exit={{ scale: 0, rotate: "-180deg" }}
              transition={{
                ease: "easeIn",
                duration: 0.3,
              }}
            >
              <div>
                <X
                  className="lg:hidden"
                  onClick={() => setOpen((open) => !open)}
                />
              </div>
            </motion.div>
          ) : (
            <Menu
              className="lg:hidden"
              onClick={() => setOpen((open) => !open)}
            />
          )}
        </div>

        {open && (
          <nav className="lg:w-[50%]  lg:hidden mt-6">
            <ul className="flex flex-col items-center gap-6">
              <li
                className="font-work-sans capitalize antialiased font-semibold text-[13px] cursor-pointer"
                onClick={() =>
                  scrollHelper(document.getElementById("benefits"))
                }
              >
                benefits
              </li>
              <li
                className="font-work-sans capitalize antialiased font-semibold text-[13px] cursor-pointer"
                onClick={() => scrollHelper(document.getElementById("pricing"))}
              >
                pricing
              </li>
              <li
                className="font-work-sans capitalize antialiased font-semibold text-[13px] cursor-pointer"
                onClick={() =>
                  scrollHelper(document.getElementById("testimonials"))
                }
              >
                testimonials
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
