import { Dispatch, SetStateAction } from "react";
import { appList } from "../data/appList";

function AppBar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="grow-0 transition-all backdrop-blur-sm mb-1 px-3 flex gap-2 bg-white/20 h-20 rounded-xl">
      {appList.map((app, index) => (
        <div
          onClick={index === 0 ? () => setIsOpen(!isOpen) : () => {}}
          key={index}
          title={app.title}
          className="flex flex-col items-center justify-center"
        >
          <img
            src={app.url}
            alt={app.title}
            className="w-14 h-14 rounded-2xl  hover:scale-125 duration-300 hover:-translate-y-5"
          />
          {index === 0 && (
            <span className="text-xs font-semibold text-white">•</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default AppBar;
