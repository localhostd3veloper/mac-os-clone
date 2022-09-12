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

function StatusBar() {
  const options = ["Finder", "File", "Edit", "View", "Go", "Window", "Help"];
  return (
    <div className="h-6 px-2 bg-black/20 backdrop-blur-md w-full overflow-hidden flex justify-between text-white items-center">
      <BsApple />
      {options.map((option, index) => {
        return (
          <button
            className="hover:text-gray-300 duration-200 Fmx-2"
            key={index}
          >
            {option}
          </button>
        );
      })}

      <div className="ml-auto flex gap-2 items-center">
        <MdOutlineWifiTetheringOff className="" />
        <IoMdDesktop className="" />
        <IoIosCalendar className="" />
        <FaUserCircle className="" />
        <IoIosBatteryFull className="" />
        <IoIosSearch className="" />
        <IoIosWifi className="" />
        <IoIosSwitch className="" />
        <img
          src="https://static.wikia.nocookie.net/logopedia/images/3/3b/Siri1.png/revision/latest?cb=20160616160932"
          alt="Siri Logo"
          className="w-4 h-4"
        />
        <div className="mx-3">
          <Moment format="ddd hh:mm"></Moment>
        </div>
      </div>
    </div>
  );
}

export default StatusBar;
