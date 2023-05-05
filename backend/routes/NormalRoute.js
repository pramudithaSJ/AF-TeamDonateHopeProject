const router = require("express").Router();
let Normal = require('../models/NormalModel')

//http://localhost:8020/normal/add
router.route("/add").post((req,res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const nic = req.body.nic;
    const contactno = req.body.contactno;
    const bloodtype = req.body.bloodtype;
    const hospital = req.body.hospital;
    const bloodpint = req.body.bloodpint;
  


  
    const newNormal = new Normal({
        
        name,
        age,
        nic,
        contactno,
        bloodtype,
        hospital,
        bloodpint
       
    })

    newNormal.save().then(() => {
        res.json("Normal Request Created")
    }).catch((err) => {
        console.log(err);
    })
})

//get all normal requests
router.route("/").get((req,res)=>{
    Normal.find().then((normal)=>{
        res.json(normal)
    }).catch((err)=>{
        console.log(err);
    })
})

//delete emergency request
router.route("/delete/:nid").delete((req,res) => {
    const normalId = req.params.nid;

    Normal.findByIdAndDelete(normalId).then(() => {
        res.status(200).send({status:"Normal Request Deleted"})
    }).catch((err)=>{
        console.log(err);
    })

})

//update normal request
//http://localhost:8020/normal/update/:nid
router.route("/update/:nid").put(async (req,res)=>{
    let normalId = req.params.nid;
    const {name,age,nic,contactno,bloodtype,hospital,bloodpint} = req.body;

    const updateNormal = {
        
        name,
        age,
        nic,
        contactno,
        bloodtype,
        hospital,
        bloodpint
      

    }

    const update = await Normal.findByIdAndUpdate(normalId,updateNormal).then(()=>{
        res.status(200).send({status: "emergency request Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

//Updateone
router.route("/updateOne/:nid").put(async (req, res) => {
    let normal = await Normal.findById(req.params.nid);
    const data = {
        
        name: req.body.name || Normal.name,
        age: req.body.age || Normal.age,
        nic: req.body.nic || Normal.nic,
        contactno: req.body.contactno || Normal.contactno,
        bloodtype: req.body.bloodtype || Normal.bloodtype,
        hospital: req.body.hospital || Normal.hospital,
        bloodpint: req.body.bloodpint || Normal.bloodpint, 
 
        

    };
    normal = await Normal.findByIdAndUpdate(req.params.nid, data, { new: true });
    res.json(normal);
});

//get one normal request 
router.route("/get/:nid").get((req,res)=>{
    let normalId =  req.params.nid;
    Normal.findById(normalId).then((normal)=>{
        res.json(normal);
    }).catch((err)=>{
        console.log(err);
    })
})

//get one of the normal request
//http://localhost:8020/normal/get/:nid
router.route("/get/:nid").get((req,res)=>{
    let normalId = req.params.nid;
    MealPlan.findById(normalId).then((item)=>{
        res.json(item)
    }).catch((err)=>{
        console.log(err);
    })
})


module.exports = router;