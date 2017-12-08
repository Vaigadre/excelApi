const express = require ('express')
const router = express.Router()
const controller = require ("./controller")


/**
 * @swagger
 * definition:
 *   Answer:
 *     type: "object"
 *     properties:
 *       questionId:
 *         type: "string"
 *       address:
 *         type: "string"
 *       formulas:
 *         type: "array"
 *       text:
 *         type: "array"
 *       values:
 *         type: "array"
 */

/**
 * @swagger
 * /excel/answer:
 *   post:
 *     tags:
 *       - Answer
 *     description: Saves a answer for question
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description: answer object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Answer'
 *     responses:
 *       201:
 *         description: Successfully created
 *         schema: 
 *           type: "object"
 *           properties:
 *             _id: 
 *               type: "string"
 *               description: Answer ID
 */
 
router.post ('/', controller.setAnswer)

/**
 * @swagger
 * /excel/answer/{id}:
 *   get:
 *     tags:
 *       - Answer
 *     description: Returns answer object for a particular question ID
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
 *         description: Answer Object
 *         schema:
 *           $ref: '#/definitions/Answer'
 */

router.get ('/:id', controller.getAnswerById)


module.exports = router

/*
router.get ('/', controller.getAnswers)

router.put('/:id',controller.updateAnswer)

router.delete ('/:id', controller.deleteAnswer)
*/

