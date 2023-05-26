import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./IT20600884/dashboard";
import AllDoctors from "./IT20600884/Doctor/AllDoctors";
import AllMasters from "./IT20600884/Master/AllMasters";
import HomePage from "./IT20620202/UserView/home";

import LoginUser from "./IT20620202/UserView/login";
import SignUpUser from "./IT20620202/UserView/signin";
import Sidebar from "./IT20603236/UserDashboard";
import AllRequests from "./IT20603236/Requests/Requests";
import MasterSidebar from "./IT20636074/MasterDashboard";
import CreateBloodDonation from "./IT20636074/components/CreateBloodDonation";
import ViewEvents from "./IT20636074/components/ViewEvents";
import UpdateBloodDonation from "./IT20636074/components/UpdateEvent";
import CloseEvent from "./IT20636074/components/CloseEvent";
import CloseEventList from "./IT20636074/components/CloseEventList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact element={<Dashboard />} />
          <Route path="/login" exact element={<LoginUser />} />
          <Route path="/loginsample" exact element={<LoginUser />} />
          <Route path="/signin" exact element={<SignUpUser />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
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
          <Route path="/Sidebar" exact element={<Sidebar/>} />
          <Route path="/requests" exact element={<AllRequests/>} />

          {/* 
          IT20636074 */}
          <Route path="/" exact element={<MasterSidebar/>} />
          <Route path="/CreateBloodEvent" exact element={<CreateBloodDonation/>} />
          <Route path="/ViewEvents" exact element={<ViewEvents/>} />
          <Route path="/UpdateBloodEvent/:eid" exact element={<UpdateBloodDonation/>} />
          <Route path="/CloseEvent/:id/:ename" exact element={<CloseEvent/>} />
          <Route path="/CloseEventList" exact element={<CloseEventList/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
