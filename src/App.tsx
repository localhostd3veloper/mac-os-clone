import { Player } from "@lottiefiles/react-lottie-player";

function App() {
  
  return (
    <div className="h-screen bg-gray-900">
      <Player
        autoplay
        src="https://assets1.lottiefiles.com/packages/lf20_rbtawnwz.json"
        className="h-screen"
      ></Player>
    </div>
  );
}

export default App;
