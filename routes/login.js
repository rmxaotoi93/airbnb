const express = require('express')
var router = express.Router();
const { login} = require("../controllers/userController")

router.route("/auth/login")
.post(login)


module.exports = router;

