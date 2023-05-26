// import { Button, Link } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "20%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function CloseEvent() {
  const navigate = useNavigate();
  const [organizationTeam, setorganizationTeam] = useState("");
  const [edate, setedate] = useState("");
  const [etime, setetime] = useState("");
  const [contact, setContact] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [file, setFile] = useState(null);
  const [items, setItems] = useState([]);
  const [eventName, seteventName] = useState([]);
  const [participants, setparticipants] = useState([]);
  const [closingDate, setclosingDate] = useState([]);
  const [closingTime, setclosingTime] = useState([]);
  const [APlus, setAPlus] = useState();
  const [BPlus, setBPlus] = useState();
  const [OPlus, setOPlus] = useState();
  const [ABPlus, setABPlus] = useState();
  const [AMynus, setAMynus] = useState();
  const [BMynus, setBMynus] = useState();
  const [OMynus, setOMynus] = useState();
  const [ABMynus, setABMynus] = useState();
  const [doctorIncharge, setdoctorIncharge] = useState([]);

  const initialValues = {
    code: "",
    name: "",
    description: "",
    quantity: 0,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const response = axios
    .post(`http://localhost:8020/nmaster/addCloseEvent`, {
      eventName: eventName,
      participants: participants,
      closingDate: closingDate,
      closingTime: closingTime,
      APlus:APlus,
      BPlus: BPlus,
      OPlus:OPlus,
      ABPlus: ABPlus,
      AMynus:AMynus,
      BMynus: BMynus,
      OMynus:OMynus,
      ABMynus: ABMynus,
      doctorIncharge: doctorIncharge
    })
    .then(() => {
      alert("Closed Successfully!!");
    })
    .catch(() => {
      alert("error!!");
    });
  };


  useEffect(() => {
    axios
      .get("http://localhost:8020/master/")
      .then((response) => {
        if (response) {
          setItems(response.data);
        } else {
          toast.error("Error While Fetching Data!!");
        }
      })
      .catch((error) => toast.error(error));
  }, [items]);

  return (
    <div style={{background:"#f3f4f6","margin-top":"-20px"}}>
    <section className="table-auto overflow-y-scroll h-screen pb-10 m-5" style={{background:"#fff","margin-top":"20px !important"}}>
    <div className="p-4">
      <div className="w-full bg-gray-100 p-5 mb-5">
        <h1 className="text-2xl">Close Event List</h1>
      </div>
        <h2>Closed Event</h2>
      </div>
      <div className="w-full flex px-10 mt-10" style={{'border-top': '1px solid #000','padding-top':'10px','margin-top':'0px'}}>
        
            <form className="w-full max-w-screen-xl mx-auto px-4 lg:px-8 flex flex-wrap">
        <div className="w-full">
            <h2 className="text-2xl font-bold mb-2">Enter Event Details</h2>
            <div className="mb-4">
            <label htmlFor="event-name" className="block text-gray-700 font-bold mb-2">
                Event Name
            </label>
            <input
                type="text"
                id="event-name"
                value={eventName}
                onChange={(event) => seteventName(event.target.value)}
                placeholder="Enter event name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            </div>
            <div className="mb-4">
                <label htmlFor="event-location" className="block text-gray-700 font-bold mb-2">
                    Participants
                </label>
                <input
                    type="text"
                    id="event-location"
                    value={participants}
                    onChange={(event) => setparticipants(event.target.value)}
                    placeholder="Enter no of participants"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="event-location" className="block text-gray-700 font-bold mb-2">
                    Closing Date
                </label>
                <input
                    type="date"
                    value={closingDate}
                    onChange={(event) => setclosingDate(event.target.value)}
                    placeholder="Enter closing date"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="event-location" className="block text-gray-700 font-bold mb-2">
                    Closing time
                </label>
                <input
                    type="time"
                    id="event-location"
                    value={closingTime}
                    onChange={(event) => setclosingTime(event.target.value)}
                    placeholder="Enter closing time"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="event-location" className="block text-gray-700 font-bold mb-2">
                    Blood count
                </label>
                <input
                  type="number"
                  id="event-location"
                  placeholder="A+"
                  value={APlus}
                  onChange={(event) => setAPlus(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                <input
                  type="number"
                  id="event-location"
                  placeholder="B+"
                  value={BPlus}
                  onChange={(event) => setBPlus(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                <input
                  type="number"
                  id="event-location"
                  placeholder="O+"
                  value={OPlus}
                  onChange={(event) => setOPlus(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                <input
                  type="number"
                  id="event-location"
                  placeholder="AB+"
                  value={ABPlus}
                  onChange={(event) => setABPlus(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                <input
                  type="number"
                  id="event-location"
                  placeholder="A-"
                  value={AMynus}
                  onChange={(event) => setAMynus(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                <input
                  type="number"
                  id="event-location"
                  placeholder="B-"
                  value={BMynus}
                  onChange={(event) => setBMynus(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                <input
                  type="number"
                  id="event-location"
                  placeholder="O-"
                  value={OMynus}
                  onChange={(event) => setOMynus(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                /> 
                <input
                  type="number"
                  id="event-location"
                  placeholder="O-"
                  value={ABMynus}
                  onChange={(event) => setABMynus(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />              
            </div>
            <div className="mb-4">
                <label htmlFor="event-location" className="block text-gray-700 font-bold mb-2">
                    Doctor Incharge
                </label>
                <input
                    type="text"
                    id="event-location"
                    value={doctorIncharge}
                    onChange={(event) => setdoctorIncharge(event.target.value)}
                    placeholder="Enter Doctor Incharge Name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="flex items-center justify-center">
            <button
                type="button"
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Close
            </button>
            </div>
        </div>
        </form>
      </div>
    </section>
    </div>
  );
}
