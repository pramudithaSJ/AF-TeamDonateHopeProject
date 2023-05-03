import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Dashboard from "./IT20600884/dashboard";
import AllDoctors from "./IT20600884/Doctor/AllDoctors";
import AllMasters from "./IT20600884/Master/AllMasters";



function App() {
  return (
    <div>
     
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/doctors" exact element={<AllDoctors/>} />
          <Route path="/masters" exact element={<AllMasters/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
