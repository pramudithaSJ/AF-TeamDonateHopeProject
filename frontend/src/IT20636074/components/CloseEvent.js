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
    .post(`http://localhost:8020/nmaster/add`, {
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
                    placeholder="Enter no of participants"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="event-location" className="block text-gray-700 font-bold mb-2">
                    Blood count
                </label>
                <textarea class="resize-none h-40 w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="event-location" className="block text-gray-700 font-bold mb-2">
                    Doctor Incharge
                </label>
                <input
                    type="text"
                    id="event-location"
                    placeholder="Enter Doctor Incharge Name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="flex items-center justify-center">
            <button
                type="submit"
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
