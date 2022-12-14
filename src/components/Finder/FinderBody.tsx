import { IAssetImages } from "../../interfaces/IAssetImages";
import { Dispatch, SetStateAction } from "react";

function FinderBody({
  imageList,
  selectedAsset,
  setSelectedAsset,
}: {
  imageList: Array<IAssetImages>;
  selectedAsset: IAssetImages | null;
  setSelectedAsset: Dispatch<SetStateAction<IAssetImages | null>>;
}) {
  return (
    <>
      {!selectedAsset ? (
        <div className="grid grid-rows-3 grid-cols-3 gap-4 px-4 cursor-default">
          {imageList.map((data) => (
            <div
              onClick={() => setSelectedAsset(data)}
              key={data.id}
              className="flex flex-col h-full justify-center items-center gap-2 py-2 drop-shadow-md"
            >
              {data?.type === "mp4" ? (
                <video
                  className="rounded cursor-pointer drop-shadow-lg"
                  src={data.source}
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <img
                  src={data.source}
                  alt={data.name}
                  className="h-36 w-60 rounded-md object-contain drop-shadow-lg cursor-pointer border border-gray-300"
                />
              )}
              <span className="text-center text-gray-700">{data.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-full overflow-hidden">
          {selectedAsset?.type === "mp4" ? (
            <video
              src={selectedAsset.source}
              autoPlay
              className="mb-10"
              controls
              loop
              muted
              controlsList="nodownload"
            />
          ) : (
            <img
              src={selectedAsset.source}
              alt={selectedAsset.name}
              className="rounded-md object-contain bg-cover"
            />
          )}
        </div>
      )}
    </>
  );
}

export default FinderBody;
