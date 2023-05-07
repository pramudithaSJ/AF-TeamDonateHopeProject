import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./IT20600884/dashboard";
import AllDoctors from "./IT20600884/Doctor/AllDoctors";
import AllMasters from "./IT20600884/Master/AllMasters";
import HomePage from "./IT20620202/UserView/home";

import LoginUser from "./IT20620202/UserView/login";
import SignUpUser from "./IT20620202/UserView/signin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDashboard from "./IT20620202/UserView/componenent/userDashboard";
import "react-datepicker/dist/react-datepicker.css";


function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" exact element={<LoginUser />} />
          <Route path="/signin" exact element={<SignUpUser />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/myProfile" exact element={<UserDashboard/>} />
          <Route path="/doctors" exact element={<AllDoctors />} />
          <Route path="/masters" exact element={<AllMasters />} />
          <Route path="/teachers02" exact element={<AllMasters />} />
          <Route path="/students" exact element={<AllMasters />} />
          <Route path="/teachers" exact element={<AllMasters />} />
          <Route path="/teachers01" exact element={<AllMasters />} />

          {/* IT20600884 */}
          <Route path="/doctors" exact element={<AllDoctors />} />

          {/* 
          IT20620202 */}
          <Route path="/teachers" exact element={<AllMasters />} />
          <Route path="/teachers" exact element={<AllMasters />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
