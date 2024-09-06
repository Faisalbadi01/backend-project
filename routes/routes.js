const express = require('express');
const controller = require("../controller/authController");
const auth = require('../middleware/Authentication');



const route = express.Router();


route.post('/reg', controller.reg)

route.post('/login', controller.login)

route.get('/userlist', auth, controller.userlist)

route.get('/search', controller.searchByCountry)

module.exports = route