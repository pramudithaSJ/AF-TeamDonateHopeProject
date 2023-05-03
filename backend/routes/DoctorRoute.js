const router = require("express").Router();
let Doctor = require('../models/DoctorModel')

//http://localhost:8020/doctor/add
router.route("/add").post((req,res) => {
    const id = req.body.id;
    const name = req.body.name;
    const age = Number(req.body.age);
    const email = req.body.email;
    const address = req.body.address;
    const contact = req.body.contact;

    const newDoctor = new Doctor({
        id,
        name,
        age,
        email,
        address,
        contact
    })

    newDoctor.save().then(() => {
        res.json("Doctor Created")
    }).catch((err) => {
        console.log(err);
    })
})

//get all doctors
router.route("/").get((req,res)=>{
    Doctor.find().then((doctor)=>{
        res.json(doctor)
    }).catch((err)=>{
        console.log(err);
    })
})

//delete doctor
router.route("/delete/:id").delete((req,res) => {
    const doctorId = req.params.id;

    Doctor.findByIdAndDelete(doctorId).then(() => {
        res.status(200).send({status:"Doctor Deleted"})
    }).catch((err)=>{
        console.log(err);
    })

})

//update doctor
//http://localhost:8020/doctor/update/:id
router.route("/update/:id").put(async (req,res)=>{
    let doctorId = req.params.id;
    const {id,name,email,age,address,contact} = req.body;

    const updateDoctor = {
        id,
        name,
        email,
        age,
        address,
        contact

    }

    const update = await Doctor.findByIdAndUpdate(doctorId,updateDoctor).then(()=>{
        res.status(200).send({status: "Doctor Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

//Updateone
router.route("/updateOne/:id").put(async (req, res) => {
    let doctor = await Doctor.findById(req.params.id);
    const data = {
        id: req.body.id || Doctor.id,
        name: req.body.name || Doctor.name,
        age: req.body.age || Doctor.age,
        email: req.body.email || Doctor.email,
        address: req.body.address || Doctor.address,
        contact: req.body.contact || Doctor.contact,
        

    };
    doctor = await Doctor.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(doctor);
});

//get one doctor 
router.route("/get/:id").get((req,res)=>{
    let doctorId =  req.params.id;
    Doctor.findById(doctorId).then((doctor)=>{
        res.json(doctor);
    }).catch((err)=>{
        console.log(err);
    })
})

//get one of the doctor
//http://localhost:8020/doctor/get/:id
router.route("/get/:id").get((req,res)=>{
    let doctorId = req.params.id;
    MealPlan.findById(doctorId).then((item)=>{
        res.json(item)
    }).catch((err)=>{
        console.log(err);
    })
})


module.exports = router;