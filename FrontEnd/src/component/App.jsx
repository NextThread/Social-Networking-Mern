import React from "react";
import { BrowserRouter ,Routes , Route } from "react-router-dom";
import Home from "./Home"
import Login from "./Login"
import NotFoundPage from "./NotFound";
import Register from "./Register";
import Secret from "./Secret";
import PrivateRoute from "../Routing/PrivateRoute";
import Secret1 from "./Secret1";
import Post from "./Post";
import HomePage from "./HomePage"
import { ToastContainer, toast } from 'react-toastify';
import FindPeople from "./FindPeople";
import Profile from "./Profile";
import EditProfile from './EditProfile'
import ChatProvider from "./ChatProvider";

import Join from './Join'

import { HashRouter } from 'react-router-dom'

const App = () => {
  
  return (
    <>
   <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route
          path="*"
          element={
            <PrivateRoute>
            <ChatProvider>
              <Routes>
          <Route path="/s" element={<HomePage />} />
          <Route path="/user/:id" element={<Profile />} />
          <Route path="/user/edit/:id" element={<EditProfile />} />
          <Route path="/chat/join" element={<Join />} />
          <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </ChatProvider>
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

const Public = () => <div>public</div>;
const Private = () => <div>private</div>;


export default App;