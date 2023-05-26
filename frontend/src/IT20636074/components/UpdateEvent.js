// import { Button, Link } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "./img/Hope.png";
import { useParams } from 'react-router-dom';


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

export default function UpdateBloodDonation() {
  const { eid } = useParams();
  const navigate = useNavigate();
  const [eventName, setEventName] = useState("");
  const [organizationTeam, setorganizationTeam] = useState("");
  const [edate, setedate] = useState("");
  const [etime, setetime] = useState("");
  const [contact, setContact] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [file, setFile] = useState(null);
  const [items, setItems] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [UpdateModal, setUpdateModal] = useState(false);
  const [UpdateItem, setUpdateItem] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [addNewModal, setIsNewOpen] = useState(false);
  const initialValues = {
    code: "",
    name: "",
    description: "",
    quantity: 0,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const response = axios
    .post(`http://localhost:8020/nmaster/update?id=`+eid, {
      eventName: eventName,
      orgTeam: organizationTeam,
      location: eventLocation,
      date: edate,
      time:etime,
      contact: contact
    })
    .then(() => {
      alert("Added Successfully!!");
    })
    .catch(() => {
      alert("error!!");
    });
  };

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };
  const getEvents = () => {
    axios
      .get("http://localhost:8020/nmaster/getEventOne?id="+eid)
      .then((response) => {
        if (response) {
          setItems(response.data);
          setEventName(response.data.eventName);
          setorganizationTeam(response.data.orgTeam);
          setEventLocation(response.data.location);
          setedate(response.data.date);
          setetime(response.data.time);
          setContact(response.data.contact);
        } else {
          toast.error("Error While Fetching Data!!");
        }
      })
      .catch((error) => toast.error(error));
  };

  useEffect(() => {
    getEvents();
  }, []);

  const deleteItem = (id) => {
    axios
      .delete(`http://localhost:8020/master/delete/${id} `)
      .then(() => {
        toast.error("Deleted Successfully!!");
      })
      .catch((err) => {
        alert(err);
      });
  };

  function getOne(id) {
    const response = axios
      .get(`http://localhost:8020/master/get/${id}`)
      .then((response) => {
        setIsOpen(true);
        setId(response?.data?.id);
        setName(response?.data?.name);
        setAge(response?.data?.age);
        setEmail(response?.data?.email);
        setContact(response?.data?.contact);
        setAddress(response?.data?.address);
        setUpdateItem(response?.data?._id);
        console.log(response?.data?._id);
      });
  }
  const [open, setOpen] = useState(false);
  const [selectedField, setSelectedField] = useState("ViewEvents");
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

<div style={{background:"#f3f4f6","margin-top":"-20px"}}>
    <section className="table-auto overflow-y-scroll h-screen pb-10 m-5" style={{background:"#fff","margin-top":"20px !important"}}>
      <div className="p-4">
      <div className="w-full bg-gray-100 p-5 mb-5">
        <h1 className="text-2xl">Update blood donation event</h1>
      </div>
        <h2>Update Event</h2>
      </div>
      <div className="w-full flex px-10 mt-10" style={{'border-top': '1px solid #000','padding-top':'10px','margin-top':'0px'}}>
        
            <form onSubmit={(e) => handleSubmit(e)} className="w-full max-w-screen-xl mx-auto px-4 lg:px-8 flex flex-wrap">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold mb-2">Upload a File</h2>

                <input type="file"  className="mb-4" id="imgUp" hidden />
                {file && (
                <p className="text-sm">
                    Selected File: <span className="font-medium">{file.name}</span>
                </p>
                )}
                <div>
                    <label for="imgUp" style={{"cursor":"pointer"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128" stroke-width="1.5" stroke="currentColor" class="h-128 w-128">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                    </label>
                </div>
                
            
        </div>
        <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold mb-2">Enter Event Details</h2>
            <div className="mb-4">
            <label htmlFor="event-name" className="block text-gray-700 font-bold mb-2">
                Event Name
            </label>
            <input
                type="text"
                id="event-name"
                placeholder="Enter event name"
                defaultValue={items.eventName}
                onChange={(event) => setEventName(event.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            </div>
            <div className="mb-4">
                <label htmlFor="event-location" className="block text-gray-700 font-bold mb-2">
                    Organization Team
                </label>
                <input
                    type="text"
                    id="event-location"
                    placeholder="Enter event location"
                    defaultValue={items.orgTeam}
                    onChange={(event) => setorganizationTeam(event.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
            <label htmlFor="event-location" className="block text-gray-700 font-bold mb-2">
                Event Location
            </label>
            <input
                type="text"
                id="event-location"
                placeholder="Enter event location"
                defaultValue={items.location}
                onChange={(event) => setEventLocation(event.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            </div>
            <div className="mb-4">
                <label htmlFor="event-location" className="block text-gray-700 font-bold mb-2">
                    Date
                </label>
                <input
                    type="date"
                    id="event-location"
                    placeholder="Enter event Date"
                    defaultValue={items.date}
                    onChange={(event) => setedate(event.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="event-location" className="block text-gray-700 font-bold mb-2">
                    Time
                </label>
                <input
                    type="time"
                    id="event-location"
                    placeholder="Enter event Time"
                    defaultValue={items.time}
                    onChange={(event) => setetime(event.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="event-location" className="block text-gray-700 font-bold mb-2">
                    Contact Number
                </label>
                <input
                    type="tel"
                    id="event-location"
                    placeholder="Enter contact number"
                    defaultValue={items.contact}
                    onChange={(event) => setContact(event.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="flex items-center justify-center">
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Update
            </button>
            </div>
        </div>
        </form>
      </div>
    </section>
    </div>

    </div>
  </div>

    
  );
}
