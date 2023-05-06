const router = require("express").Router();
let Master = require('../models/EvenModal')

//http://localhost:8020/master/add
router.route("/add").post((req,res) => {
    console.log(req.body);
    const newMaster = new Master(req.body);

    newMaster.save().then(() => {
        res.json("Event Created")
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

//delete master
router.route("/delete/:id").delete((req,res) => {
    const masterId = req.params.id;

    Master.findByIdAndDelete(masterId).then(() => {
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
router.route("/updateOne/:id").put(async (req, res) => {
    let master = await Master.findById(req.params.id);
    const data = {
        id: req.body.id || Master.id,
        name: req.body.name || Master.name,
        age: req.body.age || Master.age,
        email: req.body.email || Master.email,
        address: req.body.address || Master.address,
        contact: req.body.contact || Master.contact,
        

    };
    master = await Master.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(master);
});


//get one of the master
//http://localhost:8020/master/get/:id
router.route("/get/:id").get((req,res)=>{
    let masterId = req.params.id;
    Master.findById(masterId).then((master)=>{
        res.json(master)
    }).catch((err)=>{
        console.log(err);
    })
})


module.exports = router;