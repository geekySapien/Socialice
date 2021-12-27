import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from './Components/Login/Login';
import RegisterComponent from './Components/Login/RegisterComponent'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<LoginComponent />} />
          <Route path="/signup" element={<RegisterComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
