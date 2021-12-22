import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/Home/HomePage";

function App() {
  return (
    
    <BrowserRouter>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={HomePage}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
