const express = require("express");
const router = express.Router();
const partiesController = require("../controller/partieController");
//const validate=require('../middll/validate')

router.post("/newjoueur",partiesController.addjoueur)
router.get("/getalljoueur", partiesController.showj);
router.get("/getjoueur/:id",partiesController.showbyid)
router.delete("/deletejoueur/:id",partiesController.deleteusers)
router.put("/attaque/:id1/:id2",partiesController.attaque)
router.post("/newpartie/:id1/:id2",partiesController.addpartie)
router.get("/partie",(req,res)=>{
    res.render("partie")
    })

module.exports=router