import { appList } from "../data/appList";

function AppBar() {
  return (
    <div className="transition-all backdrop-blur-sm mb-1 flex gap-2 bg-white/20 h-20 rounded-xl">
      {appList.map((app) => (
        <div
          title={app.title}
          className="flex flex-col items-center justify-center hover:scale-125 duration-300 hover:-translate-y-5"
        >
          <img
            src={app.url}
            alt={app.title}
            className="w-14 h-14 rounded-2xl"
          />
        </div>
      ))}
    </div>
  );
}

export default AppBar;
