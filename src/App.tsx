import { BrowserRouter, Routes, Route } from "react-router-dom";
import LockScreen from "./views/LockScreen";
import MacOSApp from "./views/MacOSApp";
import ShutDown from "./views/ShutDown";
import SleepScreen from "./views/SleepScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route caseSensitive path="/" element={<MacOSApp />} />
        <Route caseSensitive path="/lockscreen" element={<LockScreen />} />
        <Route caseSensitive path="/sleep" element={<SleepScreen />} />
        <Route caseSensitive path="/shutdown" element={<ShutDown />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
