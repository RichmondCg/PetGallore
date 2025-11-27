const express = require("express");
const router = express.Router();

//imports controllers
const {getAllPets, getPetById, addPet, updatePet, deletePet} = require("../controllers/per.controller");

router.get("/getAllPets", getAllPets);
router.get("/getPetById/:id", getPetById);
router.post("/addPet", addPet);
router.put("/updatePet", updatePet);
router.delete("/deletePet", deletePet);

module.exports = router;