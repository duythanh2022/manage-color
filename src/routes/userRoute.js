const router = require("express").Router()
const authCrl = require("../controllers/authController")

router.post("/register",authCrl.authRegister)
module.exports = router