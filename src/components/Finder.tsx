import { SetStateAction, Dispatch } from "react";
import { finderDataList } from "../data/finderDataList";

function Finder({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      {isOpen && (
        <div className="h-[450px] w-[50vw] cursor-grab  flex bg-white/40 rounded-xl overflow-hidden backdrop-blur-sm">
          <div className="w-3/12 flex flex-col gap-4 p-2 cursor-default">
            <div className="flex gap-1 p-2">
              <span
                className="h-3 w-3 rounded-full bg-red-600 cursor-pointer"
                onClick={() => setIsOpen(false)}
              ></span>
              <span className="h-3 w-3 rounded-full bg-yellow-600"></span>
              <span className="h-3 w-3 rounded-full bg-green-600"></span>
            </div>
            <div className="flex flex-col gap-1 px-1.5">
              <div className="font-semibold text-gray-500 text-sm">
                Favorites
              </div>
              {finderDataList.favourites.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.isOpen &&
                      "bg-gray-100/20"
                    } flex gap-1 items-center cursor-pointer px-1.5 hover:bg-gray-100/30 rounded-md`}
                    key={index}
                  >
                    <item.icon className="text-blue-500" />
                    <div style={{ fontWeight: 500 }}>{item.name}</div>
                  </div>
                );
              })}

              <div className="font-semibold text-gray-500 text-sm mt-2">
                iCloud
              </div>
              {finderDataList.icloud.map((item, index) => (
                <div
                  className="flex gap-1 items-center cursor-pointer"
                  key={index}
                >
                  <item.icon className="text-blue-500" />
                  <div style={{ fontWeight: 500 }}>{item.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-9/12 bg-gray-200">Under Development</div>
        </div>
      )}
    </>
  );
}

export default Finder;
