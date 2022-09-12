import { Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";

import AppBar from "./components/AppBar";
import StatusBar from "./components/StatusBar";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <div className="h-screen bg-gradient-to-tl from-pink-700 via-purple-500 to-purple-600">
        <Player
          autoplay
          src="https://assets1.lottiefiles.com/packages/lf20_rbtawnwz.json"
          className="h-screen"
          speed={0.8}
          onEvent={(event) => {
            if (event === "pause") {
              setIsLoading(false);
            }
          }}
        />
      </div>
    );
  }
  return (
    <div className="h-screen bg-[url('https://wallpaperaccess.com/full/38598.jpg')] object-contain bg-cover transition-all duration-500">
      <div className="flex flex-col justify-between items-center h-full">
        <StatusBar />
        <AppBar />
      </div>
    </div>
  );
}

export default App;
