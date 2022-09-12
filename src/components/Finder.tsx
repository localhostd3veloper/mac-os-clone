import { SetStateAction, Dispatch } from "react";

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
        <div className="h-[450px] cursor-grab w-[600px] flex bg-white/40 rounded-xl overflow-hidden backdrop-blur-sm">
          <div className="w-3/12 flex flex-col p-2">
            <div className="flex gap-1">
              <span
                className="h-3 w-3 rounded-full bg-red-600 cursor-pointer"
                onClick={() => setIsOpen(false)}
              ></span>
              <span className="h-3 w-3 rounded-full bg-yellow-600"></span>
              <span className="h-3 w-3 rounded-full bg-green-600"></span>
            </div>
          </div>
          <div className="w-9/12 bg-gray-200">PANEL</div>
        </div>
      )}
    </>
  );
}

export default Finder;
