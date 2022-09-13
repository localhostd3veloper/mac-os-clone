import {
  AiOutlineDoubleLeft,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineUnorderedList,
  AiOutlineSearch,
} from "react-icons/ai";
import { GrAppsRounded } from "react-icons/gr";

function FinderHeader() {
  return (
    <div className="flex items-center justify-between px-3 gap-3 text-lg font-medium min-h-[50px] shadow">
      <AiOutlineLeft className="text-gray-400" />
      <AiOutlineRight className="ml-1" />
      <span className="text-gray-500">Pictures - Local</span>
      <GrAppsRounded className="bg-gray-300 rounded ml-5 p-1 h-7 w-7" />
      <span className="text-gray-600">|</span>
      <AiOutlineUnorderedList className="text-gray-700 rounded p-1 h-7 w-7" />{" "}
      <AiOutlineDoubleLeft className="text-gray-700 rounded p-1 h-7 w-7 ml-auto" />
      <AiOutlineSearch className="text-gray-700 rounded p-1 h-7 w-7" />
    </div>
  );
}

export default FinderHeader;
