// import { Button, Link } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import './css/viewevents.css';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

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

export default function CloseEventList() {
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

  const generatePDF = () => {
    const doc = new jsPDF();
  
    const table = document.getElementById('pdf-table');
  
    html2canvas(table).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      doc.addImage(imgData, 'PNG', 10, 10, 190, 0);
      doc.save('table.pdf');
    });
  };

  const getEvents = () => {
    axios
      .get("http://localhost:8020/nmaster/getClosedEvents")
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

  const DeleteClosedEvent = (id) => {
    axios
      .get("http://localhost:8020/nmaster/deleteCE?id="+id)
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
        <button class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded" onClick={generatePDF}>
            Create Report
        </button>
      </div>

      <div className="w-full bg-gray-100 p-5 mb-5">
        <h1 className="text-2xl">Closed Blood Donation Event List</h1>
      </div>
        <table class="table-auto" id="pdf-table">
            <thead>
                <tr>
                <th>Event Name</th>
                <th>Participants</th>
                <th>Closing Date</th>
                <th>Closing Time</th>
                <th>Blood Count</th>
                <th>Doctor</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
              {
                items.map((row,index) => (
                    <tr>
                    <td>{row.eventName}</td>
                    <td>{row.participants}</td>
                    <td>{row.closingDate}</td>
                    <td>{row.closingTime}</td>
                    <td>
                        A+ : {row.APlus}
                        B+ : {row.BPlus}
                        O+ : {row.OPlus}
                        AB+ : {row.ABPlus}
                        A- : {row.AMynus}
                        B- : {row.BMynus}
                        O- : {row.OMynus}
                        AB- : {row.ABMynus}       
                    </td>
                    <td>       {row.doctorIncharge}</td>
                    <td>
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={(e) => DeleteClosedEvent(row._id)}>
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
