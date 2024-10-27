const { Router } = require('express')

const usersRouter = require('./users.routes.js')
const notesRouter = require('./notes.routes.js')

const router = Router()
router.use('/users', usersRouter)
router.use('/notes', notesRouter)

module.exports = router
