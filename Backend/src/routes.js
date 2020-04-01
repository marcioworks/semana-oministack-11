const express = require('express')
const OngController = require('./controller/OngController')
const IncidentsController = require('./controller/IncidentsController')

const routes = express.Router()

routes.get('/ongs', OngController.index)

routes.post('/ongs', OngController.create)

routes.get('/incidents',IncidentsController.index)
routes.post('/incidents',IncidentsController.create)

module.exports = routes