import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./IT20600884/dashboard";
import AllDoctors from "./IT20600884/Doctor/AllDoctors";
import AllMasters from "./IT20600884/Master/AllMasters";
import HomePage from "./IT20620202/UserView/home";

import LoginUser from "./IT20620202/UserView/login";
import SignUpUser from "./IT20620202/UserView/signin";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" exact element={<LoginUser />} />
          <Route path="/signin" exact element={<SignUpUser />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/doctors" exact element={<AllDoctors />} />
          <Route path="/masters" exact element={<AllMasters />} />
          <Route path="/students" exact element={<AllMasters />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
