'use strict'

const router = require('express').Router() // carga el Router de express
const UserController = require('../controllers/user') //carga el controlador de
usuarios

router
 .get('/prueba', UserController.prueba)
 .post('/register', UserController.saveUser)
 .post('/login', UserController.loginUser)
 .get('/users', UserController.listUsers)
module.exports = router
