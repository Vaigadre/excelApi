const express = require('express')
const router = express.Router()
const controller = require ('./controller') 


router.get ('/', controller.getScores)

router.post ('/', controller.setScore)

router.put ('/:id', controller.updateScore)

router.get ('/:id', controller.getScoreById)

router.delete ('/:id', controller.deleteScore)


module.exports = router