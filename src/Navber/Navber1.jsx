import { BrowserRouter, Link } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";

import Option1 from "./Option1";
import { useState } from "react";

function Navber1() {
  const [translate, setTranslate] = useState("100%");

  const NavToggler = () => {
    if (!translate) {
      setTranslate("100%");
    } else {
      setTranslate("");
    }
  };

  return (
    <BrowserRouter>
      <div className=" bg-gray-400  text-white">
        <div className="mx-3 md:container md:mx-auto py-4">
          <div className="grid grid-cols-12">
            <div className="col-span-6 md:col-span-3">
              <span className="text-[30px] text-bold"> LOGO</span>
            </div>
            <div
              className={`-translate-x-[${translate}] md:-translate-x-0 md:text-center sm:transition sm:ease-in-out sm:delay-200 col-span-12 md:col-span-6  sm:absolute sm:top-0 sm:bg-slate-950 sm:w-[80%] sm:h-full sm:-mx-3`}
            >
              <Option1 />
            </div>
            <div className="col-span-6 md:col-span-3 flex justify-end">
              <div className=" ">
                <button className="bg-rose-400 px-6 py-2">HIRE ME</button>
              </div>
              <div className=" md:hidden">
                <button className="mt-[5px] mx-2" onClick={NavToggler}>
                  <VscThreeBars className="w-7 h-7" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Navber1;
