const router = require("express").Router();
let Emergency = require('../models/EmergencyModel')

//http://localhost:8020/emergency/add
router.route("/add").post((req,res) => {
    const eid = req.body.eid;
    const name = req.body.name;
    const age = Number(req.body.age);
    const nic = req.body.nic;
    const email = req.body.email;
    const contactno = Number(req.body.contactno);
    const bloodtype = req.body.bloodtype;
    const location = req.body.location;
    const hospital = req.body.hospital;
    const bloodpint = req.body.bloodpint;
    const date = req.body.date;
    const time = req.body.time;


  
    const newEmergency = new Emergency({
        eid,
        name,
        age,
        nic,
        email,
        contactno,
        bloodtype,
        location,
        hospital,
        bloodpint,
        date,
        time
    })

    newEmergency.save().then(() => {
        res.json("Emergency Request Created")
    }).catch((err) => {
        console.log(err);
    })
})

//get all emergency requests
router.route("/").get((req,res)=>{
    Emergency.find().then((emergency)=>{
        res.json(emergency)
    }).catch((err)=>{
        console.log(err);
    })
})

//delete emergency request
router.route("/delete/:eid").delete((req,res) => {
    const emergencyId = req.params.eid;

    Emergency.findByIdAndDelete(emergencyId).then(() => {
        res.status(200).send({status:"emergency request Deleted"})
    }).catch((err)=>{
        console.log(err);
    })

})

//update emergency request
//http://localhost:8020/emergency/update/:eid
router.route("/update/:eid").put(async (req,res)=>{
    let emergencyId = req.params.eid;
    const {eid,name,age,nic,email,contactno,bloodtype,location,hospital,bloodpint,date,time} = req.body;

    const updateEmergency = {
        eid,
        name,
        age,
        nic,
        email,
        contactno,
        bloodtype,
        location,
        hospital,
        bloodpint,
        date,
        time

    }

    const update = await Emergency.findByIdAndUpdate(emergencyId,updateEmergency).then(()=>{
        res.status(200).send({status: "emergency request Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

//Updateone
router.route("/updateOne/:eid").put(async (req, res) => {
    let emergency = await Emergency.findById(req.params.eid);
    const data = {
        eid: req.body.eid || Emergency.eid,
        name: req.body.name || Emergency.name,
        age: req.body.age || Emergency.age,
        nic: req.body.nic || Emergency.nic,
        email: req.body.email || Emergency.email,
        contactno: req.body.contactno || Emergency.contactno,
        bloodtype: req.body.bloodtype || Emergency.bloodtype,
        location: req.body.location || Emergency.location,
        hospital: req.body.hospital || Emergency.hospital,
        bloodpint: req.body.bloodpint || Emergency.bloodpint, 
        date: req.body.date || Emergency.date,
        time: req.body.time || Emergency.time,
        

    };
    emergency = await Emergency.findByIdAndUpdate(req.params.eid, data, { new: true });
    res.json(emergency);
});

//get one emergency request 
router.route("/get/:eid").get((req,res)=>{
    let emergencyId =  req.params.eid;
    Emergency.findById(emergencyId).then((emergency)=>{
        res.json(emergency);
    }).catch((err)=>{
        console.log(err);
    })
})

//get one of the emergency request
//http://localhost:8020/emergency/get/:eid
router.route("/get/:eid").get((req,res)=>{
    let emergencyId = req.params.eid;
    MealPlan.findById(emergencyId).then((item)=>{
        res.json(item)
    }).catch((err)=>{
        console.log(err);
    })
})


module.exports = router;