import { Dispatch, SetStateAction } from "react";
import {
  AiOutlineDoubleLeft,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineUnorderedList,
  AiOutlineSearch,
} from "react-icons/ai";
import { GrAppsRounded } from "react-icons/gr";
import { IAssetImages } from "../../interfaces/IAssetImages";

function FinderHeader({
  setSelectedAsset,
  selectedAsset,
}: {
  setSelectedAsset: Dispatch<SetStateAction<IAssetImages | null>>;
  selectedAsset: IAssetImages | null;
}) {
  return (
    <div className="flex items-center justify-between px-3 gap-3 text-lg font-medium min-h-[50px] shadow">
      <button onClick={() => setSelectedAsset(null)}>
        <AiOutlineLeft />
      </button>
      <AiOutlineRight />
      <span className="text-gray-500">
        {selectedAsset ? selectedAsset.name : "Pictures - Local"}
      </span>
      <GrAppsRounded className="bg-gray-300 rounded ml-5 p-1 h-7 w-7" />
      <span className="text-gray-600">|</span>
      <AiOutlineUnorderedList className="text-gray-700 rounded p-1 h-7 w-7" />{" "}
      <AiOutlineDoubleLeft className="text-gray-700 rounded p-1 h-7 w-7 ml-auto" />
      <AiOutlineSearch className="text-gray-700 rounded p-1 h-7 w-7" />
    </div>
  );
}

export default FinderHeader;
