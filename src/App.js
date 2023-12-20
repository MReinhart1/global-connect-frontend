import { Routes, Route, Outlet, Navigate, Link } from "react-router-dom";
import React from 'react';
import Footer from "./pages/partials/footer"
import SignIn from "./pages/registration/signin";
import Navbar from "./pages/partials/navbar";
import NotFound from "./pages/404";
import Home from "./pages/home";
import OtherState from "./pages/otherstate";
import UserSettings from "./pages/usersettings/usersettings";
import WorkQueue from "./pages/workqueue/workqueue";
import UploadProgram from "./pages/uploadprogram/uploadprogram";
import SiteBreadCrumb from "./pages/partials/sitebreadcrumb";

export const UserContext = React.createContext()

function App() {
  const token = true //This is not done with redux now, need to implement using react state management
  const ProtectedRoutes = () => {
    return token ? <Outlet /> : <Navigate to="/auth/login" />
  };
  return (
<div className="App">
    <Navbar/>
    <SiteBreadCrumb/>
    <Routes>
    <Route element={<ProtectedRoutes />}>
    <Route path="/settings" index element={<UserSettings/>} />
        <Route path="/workqueue" index element={<WorkQueue/>} />
        <Route path="/upload" index element={<UploadProgram/>} />
    </Route>
        <Route path="/" index element={<Home/>} />
        <Route path="/login" index element={<SignIn/>} />
        {/* <Route path="/other" index element={<OtherState/>} /> */}
        <Route path="/*" index element={<NotFound/>} />
    </Routes>
    <Footer/>
    </div>    
  );
}

export default App;
