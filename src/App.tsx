import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useState } from "react";
import AppBar from "./components/AppBar";
import StatusBar from "./components/StatusBar";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen bg-gradient-to-l from-pink-500 via-pink-500 to-purple-500">
        <Player
          autoplay
          src="https://assets1.lottiefiles.com/packages/lf20_rbtawnwz.json"
          className="h-screen"
        ></Player>
      </div>
    );
  }
  return (
    <div
      id="app"
      className="h-screen bg-[url('https://wallpaperaccess.com/full/38598.jpg')] object-contain bg-cover transition-all duration-500"
    >
      <div className="flex flex-col justify-between items-center h-full">
        <StatusBar />
        <AppBar />
      </div>
    </div>
  );
}

export default App;
