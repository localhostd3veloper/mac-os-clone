import React, { useEffect } from "react";

function SleepScreen() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  onkeydown = () => {
    window.location.href = "/lockscreen";
  };
  onmousemove = () => {
    window.location.href = "/lockscreen";
  };

  return (
    <div className="h-screen flex font-mono bg-black text-[100px] font-bold items-center justify-center text-white">
      {time}
    </div>
  );
}

export default SleepScreen;
