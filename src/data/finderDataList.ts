import { IoMdWifi } from "react-icons/io";
import { AiOutlineClockCircle, AiOutlineCloud } from "react-icons/ai";
import { GrAppleAppStore } from "react-icons/gr";
import { MdComputer } from "react-icons/md";
import { IoDocumentsOutline } from "react-icons/io5";
import { MdDownloading } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import { BsMusicNoteBeamed } from "react-icons/bs";

export const finderDataList = {
  favourites: [
    {
      id: 1,
      name: "AirDrop",
      icon: IoMdWifi,
    },
    {
      id: 2,
      name: "Recents",
      icon: AiOutlineClockCircle,
    },
    {
      id: 3,
      name: "Applications",
      icon: GrAppleAppStore,
    },
    {
      id: 4,
      name: "Desktop",
      icon: MdComputer,
    },
    {
      id: 5,
      name: "Documents",
      icon: IoDocumentsOutline,
    },
    {
      id: 6,
      name: "Downloads",
      icon: MdDownloading,
    },
    {
      id: 7,
      name: "Pictures",
      icon: AiFillPicture,
      isOpen: true,
    },
    {
      id: 8,
      name: "Music",
      icon: BsMusicNoteBeamed,
    },
  ],
  icloud: [
    {
      id: 1,
      name: "iCloud Drive",
      icon: AiOutlineCloud,
    },
  ],
};
