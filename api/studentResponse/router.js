const express = require ('express')
const router = express.Router()
const StudentResponse = require ('./model')
const controller = require ('./controller')


router.post ('/', controller.setStudentResponse)

module.exports = router



/*
router.get ('/', controller.getStudentResponse)

router.get ('/:id', controller.getStudentResponseById)

router.delete ('/:id', controller.deleteStudentResponse)
*/

