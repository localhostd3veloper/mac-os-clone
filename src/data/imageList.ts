import { IAssetImages } from "../interfaces/IAssetImages";

export const imageList: Array<IAssetImages> = [
  {
    id: 1,
    name: "Issues Group",
    source: require("../assets/group.jpg"),
  },
  {
    id: 2,
    name: "Kheerganga 💖",
    source: require("../assets/group1.jpg"),
  },
  {
    id: 3,
    name: "Landscape Shot 🌅",
    source: require("../assets/shot.mp4"),
    type: "mp4",
  },
  {
    id: 4,
    name: "Forests 🌳",
    source: require("../assets/shot2.mp4"),
    type: "mp4",
  },
  {
    id: 5,
    name: "Beauty of Manali 🏞️",
    source: require("../assets/landscape.jpg"),
  },
  {
    id: 6,
    name: "Group Image 📷",
    source: require("../assets/img1.jpg"),
  },
];
