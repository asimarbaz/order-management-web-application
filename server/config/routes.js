const express = require('express')

const router = express.Router()

const userController = require('../app/controller/userController')
const customerDataController = require('../app/controller/customerDataController')

const authenticateUser = require('../middleware/authentication')


router.post('/api/user/register', userController.register)
router.post('/api/user/login', userController.login)
router.get('/api/user/account', authenticateUser, userController.account)


router.post('/api/user/customerdata', authenticateUser, customerDataController.add)
router.get('/api/user/customerdata', customerDataController.list)


module.exports = router