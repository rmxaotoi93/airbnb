var express = require('express')
var router = express.Router()
const { logout } = require('../controllers/logoutController')

router.get("/logout",logout)

module.exports = router