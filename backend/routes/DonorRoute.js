const router = require("express").Router();
let Donor = require("../models/DonorModel");

//http://localhost:8020/donor/register

router.route("/register").post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const NIC = Number(req.body.NIC);
  const address = req.body.address;
  const bloodGroup = req.body.bloodGroup;
  const isActiveDonor = req.body.isActiveDonor;
  const contact = req.body.contact;
  const age = Number(req.body.age);

  const newDonor = new Donor({
    firstName,
    lastName,
    NIC,
    address,
    bloodGroup,
    isActiveDonor,
    contact,
    age,
  });

  newDonor
    .save()
    .then(() => {
      res.json("Donor Created");
      res.json(newDonor);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.route("/login").post((req, res) => {
  const password = req.body.password;
  User.findOne({ email: req.body.email }).then((user) => {
    // Check if Attendee exists
    if (!user) {
      return res.status(404).json({ email: "Email not found" });
    } else {
      // Check password
      if (password === user.password) {
        res.send(user);
      } else {
        return res.status(400).json({ password: "Password incorrect" });
      }
    }
  });
});
