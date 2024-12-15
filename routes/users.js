const express = require("express");
const router = express.Router();
const User = require("../models/user");
const usersController = require("../controller/usersController");
const validate=require('../middll/validate')
router.get("/", (req, res) => {
  res.send("hello");
});

router.get("/add/:username/:email/:cin", (req, res) => {
  try {
    new User({
      username: req.params.username,
      email: req.params.email,
      cin: req.params.cin,
    }).save();
    res.status(200).send("good added");
  } catch (err) {
    console.log(err);
  }
});

router.post("/add",validate, usersController.add);

router.get("/showusers", usersController.show);

router.get("/showusers/:id", usersController.showbyid);

router.get("/showbyname/:username", usersController.showbyname);

router.delete("/delete/:id", usersController.deleteusers);

router.put("/update/:id", usersController.update);

router.get("/chat",(req,res)=>{
res.render("chat")
})

module.exports = router;
