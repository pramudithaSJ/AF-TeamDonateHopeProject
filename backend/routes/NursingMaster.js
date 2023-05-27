const router = require("express").Router();
let Master = require('../models/EvenModal')
let CloseEventModal = require('../models/CloseEventModal')
const multer = require('multer');

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

//http://localhost:8020/master/add
router.post("/add", upload.single('filePath'), (req, res) => {
    console.log(req.body);
    console.log('File received:', req.file);
    let data = req.body;
    data.filePath = req.file.path;
    const newMaster = new Master(data);

    newMaster.save().then(() => {
        res.json("Event Created")
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/addCloseEvent").post((req,res) => {
    //console.log(req.body);
    const newMaster = new CloseEventModal(req.body);

    newMaster.save().then(() => {
        const masterId = req.query.id;

        Master.findByIdAndDelete(masterId).then(() => {
        }).catch((err)=>{
            console.log(err);
        })
        res.json("Event Closed")
    }).catch((err) => {
        console.log(err);
    })

    
})

//get all masters
router.route("/").get((req,res)=>{
    Master.find().then((master)=>{
        res.json(master)
    }).catch((err)=>{
        console.log(err);
    })
})

//get all masters
router.route("/getClosedEvents").get((req,res)=>{
    CloseEventModal.find().then((master)=>{
        res.json(master)
    }).catch((err)=>{
        console.log(err);
    })
})

//delete master
router.route("/delete").get((req,res) => {
    const masterId = req.query.id;

    Master.findByIdAndDelete(masterId).then(() => {
        res.status(200).send({status:"Master Deleted"})
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/deleteCE").get((req,res) => {
    const masterId = req.query.id;

    CloseEventModal.findByIdAndDelete(masterId).then(() => {
        res.status(200).send({status:"Master Deleted"})
    }).catch((err)=>{
        console.log(err);
    })

})

//update master
//http://localhost:8020/master/update/:id
router.route("/update/:id").put(async (req,res)=>{
    let masterId = req.params.id;
    const {id,name,email,age,address,contact} = req.body;

    const updateMaster = {
        id,
        name,
        email,
        age,
        address,
        contact

    }

    const update = await Master.findByIdAndUpdate(masterId,updateMaster).then(()=>{
        res.status(200).send({status: "Master Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

//Updateone
router.route("/update").post(async (req, res) => {
    let master = await Master.findById(req.query.id);
    console.log(req.body);
    master = await Master.findByIdAndUpdate(req.query.id, req.body, { new: true });
    res.json(master);
});


//get one of the master
//http://localhost:8020/master/get/:id
router.route("/getEventOne").get((req,res)=>{
    let masterId = req.query.id;
    console.log(masterId);
    Master.findById(masterId).then((master)=>{
        res.json(master)
    }).catch((err)=>{
        console.log(err);
    })
})


module.exports = router;