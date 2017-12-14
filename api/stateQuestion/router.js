const express = require('express')
const router = express.Router()
const controller = require ('./controller')

/**
 * @swagger
 * definition:
 *   StateQuestion:
 *     type: "object"
 *     properties:
 *       name:
 *         type: "string"
 *         example: "Maths" 
 *       state:
 *         type: "object"
 *       gradedCells:
 *         type: "array"
 */


 /**
 * @swagger
 * /excel/question:
 *   post:
 *     tags:
 *       - stateQuestion
 *     description: Saves a current question state
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description: state question object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/StateQuestion'
 *     responses:
 *       201:
 *         description: Successfully created
 *         schema: 
 *           type: "object"
 *           properties:
 *             _id: 
 *               type: "string"
 *               description: Question ID
 */
router.post ('/', controller.setStateQue)


/**
 * @swagger
 * /excel/question/{id}:
 *   get:
 *     tags:
 *       - stateQuestion
 *     description: Returns a single question by question ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Question's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single question
 *         schema:
 *           $ref: '#/definitions/StateQuestion'
 */

router.get ('/:id', controller.getStateQueById)

module.exports = router

/*
router.get ('/', controller.getStateQue)

router.put ('/:id', controller.updateStateQue)

router.delete ('/:id', controller.deleteStateQue)
*/
