const express = require ('express')
const router = express.Router()
const controller = require ('./controller')

 
/**
 * @swagger
 * /excel/questions:
 *   get:
 *     tags:
 *       - Questions list
 *     description: Returns all questions list
 *     produces:
 *       - application/json
 *     parameters:
 *      - name: records
 *        description: Required number of questions in questions array
 *        in: query
 *        required: false
 *        type: "number"
 *     responses:
 *       200:
 *         description: An array of Questions list
 *         schema:
 *           $ref: '#/definitions/StateQuestion'
 */

router.get ('/', controller.getQueList)


//router.post ('/', controller.setQuesList)


module.exports = router