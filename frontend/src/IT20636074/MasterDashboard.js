import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ViewEvents from "./components/ViewEvents";
import logo from "./components/img/Hope.png";
import CloseEventList from "./components/CloseEventList";

export default function MasterSidebar() {
  const [open, setOpen] = useState(false);
  const [selectedField, setSelectedField] = useState("ViewEvents");
  let navigate = useNavigate();
  return (
    <div className="flex">
      <div
        className={` ${

          open ? "w-56" : "w-80 "
        } flex flex-col h-screen p-3 bg-red-950 shadow duration-300`}

      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">
              <img src={logo} />
            </h2>
            
          </div>

          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
               
              </li>
        
              <li className="rounded-sm">
                <button
                id="first"
                  onClick={() => setSelectedField("ViewEvents")}
                  className="flex items-center p-2 space-x-3 rounded-md hover:bg-red-800 w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  <span className="text-gray-100">Donation Events</span>
                </button>
              </li>
              
              <li className="rounded-sm">
                <button
                id="first"
                  onClick={() => setSelectedField("CloseEvent")}
                  className="flex items-center p-2 space-x-3 rounded-md hover:bg-red-800 w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  <span className="text-gray-100">Close Event</span>
                </button>
              </li>
              
              <li className="rounded-sm">
                <button
                  onClick={() => {
                    navigate("/login");
                  }}
                  className="flex items-center p-2 space-x-3 rounded-md hover:bg-red-800 w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  <span className="text-gray-100">Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto">

        {selectedField === "ViewEvents" ? <ViewEvents/> : null}
        {selectedField === "CloseEvent" ? <CloseEventList/> : null}
        
      </div>
    </div>
  );
}
