import React from "react";

function StatusBar() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  return (
    <div className="h-6 px-2 bg-black/30 w-full overflow-hidden flex justify-between text-white items-center">
      <div>Apple: Under Development</div>
      <div>{time}</div>
    </div>
  );
}

export default StatusBar;
