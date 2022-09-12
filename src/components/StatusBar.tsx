import { useState } from "react";

function StatusBar() {
  const [time] = useState(new Date().toLocaleTimeString());
  return (
    <div className="h-6 px-2 bg-black/20 backdrop-blur-md w-full overflow-hidden flex justify-between text-white items-center">
      <div>Apple: Under Development</div>
      <div>{time}</div>
    </div>
  );
}

export default StatusBar;
