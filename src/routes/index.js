const { Router } = require('express')

const usersRouter = require('./users.routes.js')
const notesRouter = require('./notes.routes.js')
const tagsRouter = require('./tags.routes.js')
const sessionsRouter = require('./sessions.routes.js')

const router = Router()
router.use('/users', usersRouter)
router.use('/sessions', sessionsRouter)
router.use('/notes', notesRouter)
router.use('/tags', tagsRouter)

module.exports = router
