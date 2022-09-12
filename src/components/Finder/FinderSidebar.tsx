import { finderDataList } from "../../data/finderDataList";

function FinderSidebar() {
  return (
    <div className="flex flex-col gap-1 px-1.5">
      <div className="font-semibold text-gray-500 text-sm">Favorites</div>
      {finderDataList.favourites.map((item, index) => {
        return (
          <div
            className={`${
              item.isOpen && "bg-gray-100/20"
            } flex gap-1 items-center cursor-pointer px-1.5 hover:bg-gray-100/30 rounded-md`}
            key={index}
          >
            <item.icon className="text-blue-500" />
            <div style={{ fontWeight: 500 }}>{item.name}</div>
          </div>
        );
      })}

      <div className="font-semibold text-gray-500 text-sm mt-2">iCloud</div>
      {finderDataList.icloud.map((item, index) => (
        <div className="flex gap-1 items-center cursor-pointer" key={index}>
          <item.icon className="text-blue-500" />
          <div style={{ fontWeight: 500 }}>{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default FinderSidebar;
