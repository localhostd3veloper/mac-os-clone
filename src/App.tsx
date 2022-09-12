import { Player } from "@lottiefiles/react-lottie-player";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useState } from "react";

import AppBar from "./components/AppBar";
import Finder from "./components/Finder";
import StatusBar from "./components/StatusBar";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  const [{ x, y }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    config: {
      mass: 1,
      tension: 50,
      friction: 10,
    },
  }));

  const bindDrag = useDrag(({ offset }) => {
    api({
      x: offset[0],
      y: offset[1],
    });
  });

  if (isLoading) {
    return (
      <div className="h-screen bg-gradient-to-tl from-pink-700 via-purple-500 to-purple-600">
        <Player
          autoplay
          src="https://assets1.lottiefiles.com/packages/lf20_rbtawnwz.json"
          className="h-screen"
          speed={1.2}
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
    <div className="h-screen bg-wallpaper overflow-hidden bg-cover transition-all duration-500">
      <div className="flex flex-col justify-between items-center h-full">
        <StatusBar />
        <animated.div style={{ x, y }} {...bindDrag()}>
          <Finder isOpen={isOpen} setIsOpen={setIsOpen} />
        </animated.div>
        <AppBar />
      </div>
    </div>
  );
}

export default App;
