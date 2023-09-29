import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import { useState } from "react";


function App() {

  const [selectedPage, setSelectedPage] = useState("home"); 
  return <div className="app bg-gray-20">
    <Navbar 
       selectedPage={selectedPage}
       setSelectedPage={setSelectedPage}
    />
    <Home />
  </div>;
}
  
export default App;
