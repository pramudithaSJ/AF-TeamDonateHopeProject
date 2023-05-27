// import { Button, Link } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import './css/viewevents.css';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "20%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  }
};

export default function ViewEvents() {
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

  const getEvents = () => {
    axios
      .get("http://localhost:8020/nmaster/")
      .then((response) => {
        if (response) {
          setItems(response.data);
        } else {
          toast.error("Error While Fetching Data!!");
        }
      })
      .catch((error) => toast.error(error));
  };

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
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

  const DeleteEvent = (id) => {
    axios
      .get("http://localhost:8020/nmaster/delete?id="+id)
      .then((response) => {
        if (response) {
          alert("Event Deleted!");
          getEvents();
        } else {
          toast.error("Error While Fetching Data!!");
        }
      })
      .catch((error) => toast.error(error));
  }

  return (
    <div style={{background:"#f3f4f6","margin-top":"-20px"}}>
    <section className="table-auto overflow-y-scroll h-screen pb-10 m-5" style={{background:"#fff","margin-top":"20px !important"}}>
      <div className="p-4">
      <div class="flex justify-end mb-4">
        <Link to="/CreateBloodEvent">
        <button class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            Create Event
        </button>
        </Link>
      </div>

      <div className="w-full bg-gray-100 p-5 mb-5">
        <h1 className="text-2xl">Blood Donation Event List</h1>
      </div>
        <table class="table-auto w-100" style={{width:'100%'}}>
            <thead>
                <tr>
                <th>Event Name</th>
                <th>Org Team</th>
                <th>Location</th>
                <th>Date</th>
                <th>Time</th>
                <th>Contact</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
              {
                items.map((row,index) => (
                    <tr>
                    <td>{row.eventName}</td>
                    <td>{row.orgTeam}</td>
                    <td>{row.location}</td>
                    <td>{row.date}</td>
                    <td>{row.time}</td>
                    <td>{row.contact}</td>
                    <td style={{textAlign:'center'}}>
                    <Link to={`/CloseEvent/${row._id}/${row.eventName}`}>

                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <div class="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                            </svg>
                        </div>
                    </button>
                    </Link>

                    <Link to={`/UpdateBloodEvent/${row._id}`}>

                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <div class="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </div>
                    </button>
                    </Link>

                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={(e) => DeleteEvent(row._id)}>
                        <div class="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>

                        </div>
                    </button>
                    
                    </td>
                </tr>
                ))
              }
                
              
            </tbody>
        </table>
      </div>
    </section>
    </div>
  );
}
