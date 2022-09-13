import { imageList } from "../../data/imageList";

function FinderBody() {
  return (
    <div className="grid grid-rows-3 grid-cols-3 gap-4 px-4">
      {imageList.map((data) => (
        <div className="flex flex-col h-full justify-center gap-2 py-2">
          {data?.type === "mp4" ? (
            <video className="rounded" src={data.source} autoPlay loop muted />
          ) : (
            <img
              src={data.source}
              alt=""
              className="h-36 w-60 rounded-md object-contain"
            />
          )}
          <span className="text-center text-gray-700">{data.name}</span>
        </div>
      ))}
    </div>
  );
}

export default FinderBody;
