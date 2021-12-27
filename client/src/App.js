import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from './Components/Login/LoginComponent';
import RegisterComponent from './Components/Login/RegisterComponent'
import ProfileComponent from './Components/Profile/ProfileComponent';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<LoginComponent />} />
          <Route path="/signup" element={<RegisterComponent />} />
          <Route path="/profile" element={<ProfileComponent/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
