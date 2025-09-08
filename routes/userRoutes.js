const router= require("express").Router()
const{signup, signin}= require("../Controllers/userAuthController")



router.post("/signup" , signup)
router.post("/signin" , signin) 



module.exports= router
