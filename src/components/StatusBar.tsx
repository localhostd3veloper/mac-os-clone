import { BsApple } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import {
  IoIosSwitch,
  IoIosSearch,
  IoIosCalendar,
  IoIosBatteryFull,
  IoIosWifi,
} from "react-icons/io";
import { MdOutlineWifiTetheringOff } from "react-icons/md";
import { IoMdDesktop } from "react-icons/io";
import Moment from "react-moment";
import { useState } from "react";
import { systemDropDownoptions } from "../data/systemDropDownList";

function StatusBar() {
  const options = ["Finder", "File", "Edit", "View", "Go", "Window", "Help"];
  const [isSystemDropdown, setisSystemDropdown] = useState(false);

  return (
    <div className="z-10 h-6 px-2 bg-white/20 backdrop-blur-md w-full  flex gap-2 text-sm justify-between text-white items-center">
      <BsApple
        onClick={() => setisSystemDropdown(!isSystemDropdown)}
        className="hover:text-gray-700 duration-500 cursor-pointer"
      />
      {options.map((option, index) => {
        return (
          <button className="hover:text-gray-300 duration-200" key={index}>
            {option}
          </button>
        );
      })}

      <div className="ml-auto flex gap-2 items-center">
        <MdOutlineWifiTetheringOff />
        <IoMdDesktop />
        <IoIosCalendar />
        <FaUserCircle />
        <IoIosBatteryFull />
        <IoIosSearch />
        <IoIosWifi />
        <IoIosSwitch />
        <div className="mx-3">
          <Moment format="ddd hh:mm"></Moment>
        </div>
      </div>
      {isSystemDropdown && (
        <div className="absolute border px-2 py-2 border-gray-200 top-7 rounded left-1 text-gray-700 text-sm text-left bg-white/80 backdrop-blur-md flex flex-col justify-around gap-2">
          {systemDropDownoptions.map((option, index) => (
            <div key={option.id}>
              <button
                onClick={option.action}
                className="text-sm w-full text-left hover:bg-white/70  rounded px-3 duration-300"
              >
                {option.name}
              </button>
              {(index === 0 ||
                index === 2 ||
                index === 3 ||
                index === 4 ||
                index === 7) && <hr className="border-slate-400/75 my-1" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StatusBar;
