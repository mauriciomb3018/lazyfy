'use strict'
const router = require('express').Router()
const albumController = require('../controllers/album')
router
 .post('/albums', albumController.create)
 .get('/albums/:id?', albumController.read)
 .put('/albums/:id', albumController.update)
 .delete('/albums/:id', albumController.destroy)
module.exports = router
