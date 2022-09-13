import { SetStateAction, Dispatch, useState } from "react";
import { IAssetImages } from "../../interfaces/IAssetImages";
import FinderBody from "./FinderBody";
import FinderHeader from "./FinderHeader";
import FinderSidebar from "./FinderSidebar";
function Finder({
  isOpen,
  setIsOpen,
  imageList,
  setIsFullScreen,
  isFullScreen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  imageList: Array<IAssetImages>;
  isFullScreen: boolean;
  setIsFullScreen: Dispatch<SetStateAction<boolean>>;
}) {
  const [selectedAsset, setSelectedAsset] = useState<IAssetImages | null>(null);

  return (
    <>
      {isOpen && (
        <div
          className={`${
            isFullScreen ? "h-[85vh] w-screen " : "h-[70vh] w-[50vw]"
          }  cursor-grab  flex bg-white/40 rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-300`}
        >
          <div className="w-3/12 flex flex-col gap-4 p-2 cursor-default">
            <div className="flex gap-1 p-2">
              <button
                className="h-3 w-3 rounded-full bg-red-600 cursor-pointer"
                onClick={() => setIsOpen(false)}
              ></button>
              <button
                className="h-3 w-3 rounded-full bg-yellow-600"
                onClick={() => setIsFullScreen(!isFullScreen)}
              ></button>
              <span className="h-3 w-3 rounded-full bg-green-600"></span>
            </div>
            <FinderSidebar />
          </div>
          <div className="w-9/12 bg-gray-200 flex flex-col">
            <FinderHeader
              selectedAsset={selectedAsset}
              setSelectedAsset={setSelectedAsset}
            />
            <FinderBody
              selectedAsset={selectedAsset}
              setSelectedAsset={setSelectedAsset}
              imageList={imageList}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Finder;
