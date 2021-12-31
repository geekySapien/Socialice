import './App.css';
import { createContext, useReducer, useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from './Components/Login/LoginComponent';
import RegisterComponent from './Components/Login/RegisterComponent'
import ProfileComponent from './Components/Profile/ProfileComponent';
import { PostsComponent } from './Components/Posts/PostsComponent';
import CreatePostComponent from './Components/CreatePost/CreatePostComponent';
import Navbar from './Components/Navbar/Navbar.component';
import {INITIAL_STATE, reducer} from './reducers/UserReducer'

export const UserContext = createContext();
function Routing() {
  const { state, dispatch } = useContext(UserContext);
   useEffect(() => {
     const getUser = JSON.parse(localStorage.getItem("user"));
     console.log(typeof getUser, getUser);
     if (getUser) {
       dispatch({type:"USER", paylaod:getUser})
     }
   }, []);
  return (
    <>
      <Routes>
        <Route path="/signin" element={<LoginComponent />} />
        <Route path="/signup" element={<RegisterComponent />} />
        <Route path="/profile" element={<ProfileComponent />} />
        <Route path="/" element={<PostsComponent />} />
        <Route path="/create" element={<CreatePostComponent />} />
      </Routes>
      
    </>
  );
}
function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  
 
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Navbar />
          <Routing/>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
