// import { Button, Link } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


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

export default function AllRequests() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
 
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [UpdateModal, setUpdateModal] = useState(false);
  const [UpdateItem, setUpdateItem] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [addNewModal, setIsNewOpen] = useState(false);
  const [addNewModal1, setIsNewOpen1] = useState(false);
  const initialValues = {
    code: "",
    name: "",
    description: "",
    quantity: 0,
  };

  // const validationSchema = Yup.object().shape({
  //   age: Yup.number().required("Required Age"),
  //   email: Yup.string().email("Invalid email address").required("Required"),
  //   address: Yup.string()
  //     .matches(/^0\d{9}$/, {
  //       message: "address number must start with 0 and have exactly 10 digits",
  //     })
  //     .required("address number is required"),
  //   contact: Yup.string().required("Required contact"),
  //   confirmcontact: Yup.string()
  //     .oneOf([Yup.ref("contact")], "contacts must match")
  //     .required("Required"),
  // });

  
 

  function AddEmergencyRequests(values) {
    console.log(values);

    const response = axios
      .post(`http://localhost:8020/emergency/add`, {
        
        name: values.name,
        age: values.age,
        nic: values.nic,
        contactno: values.contactno,
        bloodtype: values.bloodtype,
        hospital: values.hodpital,
        bloodpint: values.bloodpint,
        date: values.date,
        time: values.time,
        
      })
      .then(() => {
        toast.success("Emergency Request Added !!");
        setIsNewOpen(false);
      })
      .catch(() => {
        toast.error("error!!");
      });
  }

  function AddNormalRequests(values) {
    console.log(values);

    const response = axios
      .post(`http://localhost:8020/normal/add`, {
       
      name: values.name,
      age: values.age,
      nic: values.nic,
      contactno: values.contactno,
      bloodtype: values.bloodtype,
      hospital: values.hodpital,
      bloodpint: values.bloodpint,

      })
      .then(() => {
        toast.success("Normal Request Added !!");
        setIsNewOpen1(false);
      })
      .catch(() => {
        toast.error("error!!");
      });
  }


  return (
    <section className="table-auto overflow-y-scroll h-screen pb-10">
     
      <div className="w-full flex flex-row px-80 mt-60">
        <button
          type="button"
          onClick={() => {
            setIsNewOpen(true);
          }}
          class="  text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-4 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800 "
        >
          {" "}
          Normal Requests
        </button>
        <div className="mx-4"></div>
        <button
          type="button"
          onClick={() => {
            setIsNewOpen1(true);
          }}
          class="  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-4 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          {" "}
          Emergency Requests
        </button>
      </div>

      <Modal
        isOpen={addNewModal}
        style={customStyles}
        contentLabel="Example Modal"

        
        
      >
        <div>
          {" "}
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={AddNormalRequests}
          >
            {({ errors, touched }) => (
              
              <Form> 
               
                <h2 className="mb-5 text-center px-5 py-5 bg-red-800 text-white text-2xl" >Normal Requests</h2>
                <div className="flex gap-4">
                 

                  <div className="flex-col w-full">
                    <div className="ll">
                      {" "}
                      <p className="font-semibold">Name</p>
                    </div>
                    <div className="ll">
                      {" "}

                      <Field
                        className="border border-grey-dark text-sm p-3 my-1  rounded-md w-full"
                        type="text"
                        name="name"         
                        required={true}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex-col w-full">
                  <div className="ll">
                    {" "}
                    <p className="font-semibold">Age</p>
                  </div>
                  <div className="ll">
                    {" "}
                    <Field
                      className="border border-grey-dark text-sm p-3 my-1  rounded-md w-full"
                      type="number"
                      name="age"
                    />
                  </div>

                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-xs"
                    name="age"
                  />
                </div>
                

                <div className="flex-col w-full">
                  <div className="ll">
                    {" "}
                    <p className="font-semibold">NIC</p>
                  </div>
                  <div className="ll">
                    {" "}
                    <Field
                      className="border border-grey-dark text-sm p-3 my-1  rounded-md w-full"
                      type="text"
                      name="nic"
                    />
                  </div>

                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-xs"
                    name="nic"
                  />
                </div>

                <div className="flex-col w-full">
                  <div className="ll">
                    {" "}
                    <p className="font-semibold">Contact No</p>
                  </div>
                  <div className="ll">
                    {" "}
                    <Field
                      className="border border-grey-dark text-sm p-3 my-1  rounded-md w-full"
                      type="number"
                      name="contactno"
                      maxlength = "10"
                    />
                  </div>

                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-xs"
                    name="contactno"
                  />
                </div>

                <div className="flex-col">
                  <div className="ll">
                    {" "}
                    <p className="font-semibold">Blood Type</p>
              
                 </div>
                  <div className="ll">
                    {" "}

                    <select  className="border border-grey-dark text-sm p-3 my-1 rounded-md w-full " name = "bloodtype" id = "bloodtype" >
                   
                  <option value= "choose">Choose a Blood Type</option>
                  <option value= "AB+">AB+</option>
                  <option value= "AB-">AB-</option>
                  <option value= "A+">A+</option>
                  <option value= "A-">A-</option>
                  <option value= "B+">B+</option>
                  <option value= "B-">B-</option>
                  <option value= "O+">O+</option>
                  <option value= "O-">O-</option>
                 </select>
                  
                
                  </div>

                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-xs italic"
                    name="bloodtype"
                  />
                </div>

                <div className="flex-col w-full">
                  <div className="ll">
                    {" "}
                    <p className="font-semibold">Hospital</p>
                  </div>
                  <div className="ll">
                    {" "}
                    <Field
                      className="border border-grey-dark text-sm p-3 my-1  rounded-md w-full"
                      type="text"
                      name="hospital"
                    />
                  </div>

                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-xs"
                    name="hospital"
                  />
                </div>
                
                <div className="flex-col w-full">
                  <div className="ll">
                    {" "}
                    <p className="font-semibold">Blood Pint</p>
                  </div>
                  <div className="ll">
                    {" "}
                    <Field
                      className="border border-grey-dark text-sm p-3 my-1  rounded-md w-full"
                      type="number"
                      name="bloodpint"
                    />
                  </div>

                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-xs"
                    name="bloodpint"
                  />
                </div>




                <div className="w-full flex gap-2">
                  <button
                    className="bg-red-900 w-1/2 text-white py-3 hover:bg-red-700"
                    onClick={() => {
                      setIsNewOpen(false);
                    }}
                  >
                    close
                  </button>
                  <button
                    className="bg-green-900 w-1/2 text-white py-3 hover:bg-green-700"
                    type="submit"
                  >
                    Add
                  </button>
                </div>
                
              </Form>
              
            )}
          </Formik>
        </div>
      </Modal>

      <Modal
        isOpen={addNewModal1}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          {" "}
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={AddEmergencyRequests}
          >
            {({ errors, touched }) => (
              <Form>
                <h2 className="mb-5">Emergency Requests</h2>
                <div className="flex gap-4">
                
                  <div className="flex-col w-full">
                    <div className="ll">
                      {" "}
                      <p className="font-semibold">Name</p>
                    </div>
                    <div className="ll">
                      {" "}
                      <Field
                        className="border border-grey-dark text-sm p-3 my-1  rounded-md w-full"
                        type="text"
                        name="name"
                        required={true}
                        
                      />
                    </div>
                  </div>
                </div>

                <div className="flex-col w-full">
                  <div className="ll">
                    {" "}
                    <p className="font-semibold">Age</p>
                  </div>
                  <div className="ll">
                    {" "}
                    <Field
                      className="border border-grey-dark text-sm p-3 my-1  rounded-md w-full"
                      type="number"
                      name="age"
                    />
                  </div>

                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-xs"
                    name="age"
                  />
                </div>
                

                <div className="flex-col w-full">
                  <div className="ll">
                    {" "}
                    <p className="font-semibold">NIC</p>
                  </div>
                  <div className="ll">
                    {" "}
                    <Field
                      className="border border-grey-dark text-sm p-3 my-1  rounded-md w-full"
                      type="text"
                      name="nic"
                    />
                  </div>

                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-xs"
                    name="nic"
                  />
                </div>

               

                <div className="flex-col">
                  <div className="ll">
                    {" "}
                    <p className="font-semibold">Contact No</p>
                  </div>
                  <div className="ll">
                    {" "}
                    <Field
                      className="border border-grey-dark text-sm p-3 my-1 rounded-md w-full"
                      type="number"
                      name="contactno"
                      maxlength="10"
                    />
                  </div>

                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-xs italic"
                    name="contactno"
                  />
                </div>




                <div className="flex-col w-full">
                  <div className="ll">
                    {" "}
                    <p className="font-semibold">Blood Type</p>
                  </div>
                  <div className="ll">
                    {" "}
                    <Field
                      className="border border-grey-dark text-sm p-3 my-1  rounded-md w-full"
                      type="text"
                      name="bloodtype"
                    />
                  </div>

                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-xs"
                    name="bloodtype"
                  />
                </div>



                <div className="flex-col w-full">
                  <div className="ll">
                    {" "}
                    <p className="font-semibold">Hospital</p>
                  </div>
                  <div className="ll">
                    {" "}
                    <Field
                      className="border border-grey-dark text-sm p-3 my-1  rounded-md w-full"
                      type="text"
                      name="hospital"
                    />
                  </div>

                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-xs"
                    name="hospital"
                  />
                </div>



                <div className="flex-col w-full">
                  <div className="ll">
                    {" "}
                    <p className="font-semibold">Blood Pint</p>
                  </div>
                  <div className="ll">
                    {" "}
                    <Field
                      className="border border-grey-dark text-sm p-3 my-1  rounded-md w-full"
                      type="number"
                      name="bloodpint"
                    />
                  </div>

                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-xs"
                    name="bloodpint"
                  />
                </div>



                <div className="flex-col w-full">
                  <div className="ll">
                    {" "}
                    <p className="font-semibold">Date</p>
                  </div>
                  <div className="ll">
                    {" "}
                    <Field
                      className="border border-grey-dark text-sm p-3 my-1  rounded-md w-full"
                      type="date"
                      name="date"
                    />
                  </div>

                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-xs"
                    name="date"
                  />
                </div>




                <div className="flex-col w-full">
                  <div className="ll">
                    {" "}
                    <p className="font-semibold">Time</p>
                  </div>
                  <div className="ll">
                    {" "}
                    <Field
                      className="border border-grey-dark text-sm p-3 my-1  rounded-md w-full"
                      type="time"
                      name="time"
                    />
                  </div>

                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-xs"
                    name="time"
                  />
                </div>


            
                <div className="w-full flex gap-2">
                  <button
                    className="bg-red-900 w-1/2 text-white py-3 hover:bg-red-700"
                    onClick={() => {
                      setIsNewOpen1(false);
                    }}
                  >
                    close
                  </button>
                  <button
                    className="bg-green-900 w-1/2 text-white py-3 hover:bg-green-700"
                    type="submit"
                  >
                    Add
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
      
    </section>
  );
}
