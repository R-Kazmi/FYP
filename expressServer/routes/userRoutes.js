const{register,login,setAvatar, getAllUsers,logOut} =require("../controllers/userController")

const router=require("express").Router()
router.post("/chatRegister",register)
router.post("/chatLogin",login)
router.get('/allusers/:id',getAllUsers)
router.post("/setavatar/:id", setAvatar);
router.get("/chatLogout/:id", logOut);
module.exports=router