var express = require('express');
var router = express.Router();
const {getUserList, createUser, updateUsers, } = require("../controllers/userController")

router.route("/users")
.get(getUserList)
.post(createUser)
.put(updateUsers)

module.exports = router;
