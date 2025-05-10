const express = require("express");
const router = express.Router();

const {
  addHouse,
  getHouseDetails,
  getListingsByType,
  getFilteredHouses,
  deleteProperty,
  getFavoriteListings,
  addFavorite,
  getAllListings,
} = require("../controllers/house.controller");

const authMiddleware = require("../middlewares/auth_middle_ware");
const upload = require("../../utils/uploads");

router.get("/house", getAllListings);
// router.get("/houses", getAllListingsNew);
router.post("/addHouse",upload.array('photos',3), addHouse);
router.get("/house/:id", getHouseDetails)
router.delete("/house/:id", deleteProperty)


router.get("/housetype", getListingsByType)
router.post("/addfavourite", addFavorite)
router.get("/favorite/:userId", getFavoriteListings)
router.get("/listings", getFilteredHouses)
router.patch("/listings/:id", getFilteredHouses)


module.exports = router;
