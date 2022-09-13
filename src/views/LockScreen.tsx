function LockScreen() {
  onkeydown = (e) => {
    if (e.key === "Enter") {
      window.location.assign("/lockscreen");
    }
  };
  return (
    <div className="h-screen bg-wallpaper bg-cover flex items-center">
      <div className="w-full h-full bg-black/50 backdrop-blur flex flex-col gap-4 items-center justify-center">
        <img
          className="w-32 h-32 rounded-full"
          src="https://avatars.githubusercontent.com/u/64231917?v=4"
          alt="profile"
        />
        <div className="text-white text-3xl font-semibold mt-2">
          Gautam Anand
        </div>
        <div className="text-white text-sm mt-2">Press Enter to Unlock</div>
      </div>
    </div>
  );
}

export default LockScreen;
