'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const os = require('os')
const app = express()
const user_routes = require('./routes/user')
const artist_routes = require('./routes/artist')
const album_routes = require('./routes/album')
const song_routes = require('./routes/song')


app
 .use(cors())
 .use(bodyParser.urlencoded({extended:false}))
 .use(bodyParser.json())
 .use('/api', user_routes)
 .use('/api', artist_routes)
 .use('/api', album_routes)
 .use('/api', song_routes)

module.exports = app
