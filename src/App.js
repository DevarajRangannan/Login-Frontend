import Login from "./components/Login";
import Logo from "./components/Logo";

import { Routes, Route } from "react-router";
import Signup from "./components/Signup";
function App() {
  return (
    <>
      <Logo/>
      
      <div className="h-screena min-w-[20em]  md:max-w-screen-2xl md:m-auto selection:bg-gray-700 selection:text-white flex justify-center items-center h-full">
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="*" element={<Login/>}/>
        </Routes>
      </div>
      
    </>
  );
}

export default App;
